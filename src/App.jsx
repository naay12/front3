import { useEffect, useState } from "react";

export default function App() {
  
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      setUsers(data.users);
    } catch (erro) {
      alert('Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Usuários cadastrados</h1>

      {loading === true ? 'Carregando...' : null}

      {loading === false && users.length < 1
        ? 'Nenhum usuário encontrado'
        : null}

      <ul>
        {users.map(user => (
          <li
            key={user.id}
            style={{ border: '3px solid black', marginBottom: 10, listStyleType: "none"}}
          >
            
            <h3>Nome: {user.firstName} {user.lastName}</h3>           
            <p>email: {user.email}</p>
            <p>Idade: {user.age}</p>
            <p>Aniversário: {user.birthDate}</p>
            <img src={user.image} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}


