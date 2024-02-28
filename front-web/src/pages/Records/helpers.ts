import moment from 'moment'

export const formatDate = (timestampString: string) => {
    const timestamp = parseInt(timestampString, 10);
    return moment.unix(timestamp).format('DD/MM/YYYY HH:mm');
};