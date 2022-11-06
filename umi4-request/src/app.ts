import { proxy } from 'ajax-hook';
import { message, notification } from 'antd';

import type { RequestConfig } from '@umijs/max';

proxy({
  onRequest: (config, handler) => {
    if (config.url === '/api/user') {
      handler.resolve({
        config,
        status: 200,
        headers: {
          'content-type': 'application/json'
        },
        response: {
          errorCode: 0,
          errorMessage: 'OK',
          success: true,
          data: 'Tom',
        }
      })
      return;
    }

    if (config.url === '/api/userError') {
      handler.resolve({
        config,
        status: 200,
        headers: {
          'content-type': 'application/json'
        },
        response: {
          errorCode: 400100,
          errorMessage: '用户不存在',
          success: false,
        }
      })
      return;
    }

    handler.next(config)
  }
})

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}

export const request: RequestConfig = {
  timeout: 30 * 1000,
  errorConfig: {
    errorHandler(error: any, opts) {
      if (opts?.skipErrorHandler) throw error;

      if (error.name === 'BizError') {
        const errorInfo = error.info;

        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;

          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warn(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              break;
            default:
              message.error(errorMessage);
          }
        }
      }
    },
    errorThrower(res) {
      const { data, errorCode, errorMessage, showType } = res;

      if (errorCode !== 0) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // 抛出自制的错误
      }
    }
  },
}
