import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FaCode } from 'react-icons/fa';
import { Container, List } from '../Repository/styled';

export default function Repository({ match }) {
  const [repository, setRepository] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function load() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const [repositoryData, userData] = await Promise.all([
        api.get(`/users/${nameRepo}/repos`),
        api.get(`/users/${nameRepo}`),
      ]);

      setRepository(repositoryData.data);
      setUser(userData.data);
    }
    load();
  }, [match.params.repository]);

  

  return (
    <Container>
      <h1>Repositórios {user.login}</h1>
      <img src={user.avatar_url} alt={user.login} />
      <p>
        {user.login} / {user.name}
      </p>
      <List>
        {repository.map((repo) => (
          <li key={repo.id}>
            <h2>{repo.name}</h2>
            <a href={repo.html_url}><FaCode size={40}/></a>
            <p>{repo.description}</p>
          </li>
        ))}
      </List>
    </Container>
  );
}
