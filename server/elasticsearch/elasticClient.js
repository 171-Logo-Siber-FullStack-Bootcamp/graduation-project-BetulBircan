const es = require('elasticsearch')  //elastic search modülü ekleme

//bağlanma
const op = {
    host: 'localhost:9200',
    log: 'trace'
}

const esClient = new es.Client(op);
 
module.exports = esClient;
