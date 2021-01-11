const IP_URL = 'http://localhost:7001/default/';
const SERVICE_PATH = {
    GET_ARTICLE_LIST: IP_URL + 'get_article_list/', //Main page interface
    GET_ARTICLE_LIST_BY_ID: IP_URL + 'get_article_list_by_id/', //Id-List interface
    GET_ARTICLE_BY_ID: IP_URL + 'get_article_by_id/', //Detail page interface
    GET_TYPE_INFO: IP_URL + 'get_type_info' //Get type information interface
};

export default SERVICE_PATH;