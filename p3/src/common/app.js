import Api from '@/common/api.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyCNdGcoveaNg9PNOz2rd-iJyIhNRL9Lr_E',
        projectId: 'e28-sprs'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});