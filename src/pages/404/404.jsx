import { Link } from 'react-router-dom'

import LoadError from '../../components/LoadError/LoadError'
const Page404 = () => {

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 50,
    color: '#9f0013',
    cursor: 'pointer',
  }

  return (
    <div>
      <LoadError />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
       Página não existe ou foi removida
      </p>
      <Link to="../" style={linkStyle} className="pulse404">
       Retorne para a página inicial
      </Link>
    </div>
  )
}

export default Page404
