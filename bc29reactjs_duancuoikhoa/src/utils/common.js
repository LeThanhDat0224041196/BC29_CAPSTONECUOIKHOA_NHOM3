import moment from "moment";

export const formatDate = (date, format='L')=>{
    return moment(date).format(format);
};