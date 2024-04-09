import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(), // O/P logs to console
		new winston.transports.File({ filename: 'logs/combined.log'}),
		new ElasticsearchTransport({
			level: 'info',
			indexPrefix: 'logs',
			clientOpts: { node: 'https://es01:9200' ,
			auth: {
				username: 'elastic',
				password: 'changeme'
			}
			},
		})
	]
});

export default logger;
