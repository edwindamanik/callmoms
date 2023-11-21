const devApiUrl = 'http://127.0.0.1:8000/api'

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : devApiUrl;

export default apiUrl;