import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

/*
    프로젝트 완료 후 배포 시, componentDidCatch 로 이미 에러를 잡은 경우, 
    Sentry 로 에러가 자동으로 전달되지 않는다.

    이 경우 아래와 같이 세팅한다.
    
    componentDidCatch 에서 process.env.NODE_ENV 값을 조회해
    현재 개발환경인지 배포환경인지 확인할 수 있다.
    개발 환경에서는 captureException 을 사용할 필요가 없기 때문에 아래와 같이 설정한다.
*/
class ErrorBoundary extends Component {
    state = {
        error: false
    };
    componentDidCatch(error, info) {
        console.log('에러가 발생했습니다.');
        console.log({
            error,
            info
        });
        this.setState({
            error: true
        });
        if(process.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: info });
        }
    }
    render() {
        if(this.state.error) {
            return (<h1>에러 발생!</h1>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
