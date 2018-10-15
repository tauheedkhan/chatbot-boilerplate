import config from '../config';
import { apiGatewayRequest, COMMON_API_GATEWAY_HEADERS } from './helpers/fetch';

class ConversationService {
  // private vars
  _responseContext = {}

  message({
    text,
    context = {}
  }) {
    this._responseContext = {...this._responseContext, ...context};
    const payload = {
      input: {
        text
      },
      context: this._responseContext
    };
    console.log('request',payload);
    return apiGatewayRequest(`${config.apiRoot}/watson/assistance/message`, {
      method: 'post',
      headers: COMMON_API_GATEWAY_HEADERS,
      body: JSON.stringify(payload)
    })
      .then(r => {
        const res = JSON.parse(JSON.stringify(r));
        this._responseContext = res.context;
        return res;
      });
  }

}

export default new ConversationService();
