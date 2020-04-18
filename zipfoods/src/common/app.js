import Api from '@/common/api.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyAFzUWzTf3YSeZkkXsz-Izp6XKR9Emd6g0',
        projectId: 'e28-zipfoods-sm'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});