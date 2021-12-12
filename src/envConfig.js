const isLocal =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const apiEndpoint = isLocal
    ? process.env.REACT_APP_LOCAL_DB
    : process.env.REACT_APP_REMOTE_DB;