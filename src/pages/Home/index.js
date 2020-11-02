import React, { useState, useCallback, useEffect } from 'react';
import {
  FaGithub,
  FaSearch,
  FaBook,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from 'react-icons/fa';
import api from '../../services/api';
import { Container, Form, FindButton, List, PageActions } from './styled';
import { Link } from 'react-router-dom';

export default function Home() {
  const [findUser, setFindUser] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);

  function handleInputChange(event) {
    setFindUser(event.target.value);
  }

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      async function findData() {
        const response = await api.get(`/search/users`, {
          params: {
            q: `${findUser}`,
            per_page: 12,
          },
        });
        setUsersData(response.data.items);
      }
      console.log(usersData);
      findData();
    },
    [findUser]
  );

  useEffect(() => {
    if (usersData.length) {
      async function loadUsers() {
        const response = await api.get(`/search/users`, {
          params: {
            q: `${findUser}`,
            page,
            per_page: 12,
          },
        });
        setUsersData(response.data.items);
      }
      loadUsers();
    }
  }, [page]);

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <div>
      <Container>
        <h1>
          <FaGithub />
          Pesquisa de Usuários
        </h1>
        <Form onSubmit={handleSubmit}>
          <input type="text" value={findUser} onChange={handleInputChange} />
          <FindButton>
            <FaSearch />
          </FindButton>
        </Form>
        <List>
          {usersData.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
              <Link to={`/repository/${encodeURIComponent(user.login)}`}>
                <FaBook size={20} />
              </Link>
            </li>
          ))}
        </List>
        <PageActions>
          <button
            type="button"
            onClick={() => handlePage('back')}
            disabled={page < 2}
          >
            <FaArrowAltCircleLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handlePage('next')}
            disabled={page < 1}
          >
            <FaArrowAltCircleRight size={20} />
          </button>
        </PageActions>
      </Container>
    </div>
  );
}
