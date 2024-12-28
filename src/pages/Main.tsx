import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__h1Box}>
          <h1 className={styles.container__h1Box__h1}>
            안녕하세요? 25년 신입사원{' '}
            <span style={{ color: 'lightblue' }}>김재완 </span>
            인사드립니다
          </h1>
        </div>
        <div className={styles.container__h2Box}>
          <h2 className={styles.container__h2Box__h1}>
            개발을 하다 보면, 단시간에 프로토타이핑을 끝내거나, UI 컴포넌트
            하나하나를 구현할 만큼의 여유가 없을 때 기존에 만들어진 디자인
            시스템을 사용하면 좋다.
            <br /> 이번 프로젝트에서도 디자인 시스템을 채택을 앞두고 있었는데,
            <br /> 전면 오픈소스 디자인 시스템 중에서는 Chakra 와 Mantine
            <br /> 으로 좁혀졌고, 그 중 스타일링 커스텀화는 조금 어렵지만,
            <br /> hook 과 컴포넌트가 더 많은 Mantine
            <br /> 으로 하기로 하였다.
          </h2>
        </div>
        <div className={styles.container__h3Box}>
          <h3 className={styles.container__h3Box__h1}>
            기존에 처음부터 모든 것을 만들던 프로젝트와는 달리 조금의 변화를
            주어야했다. 특히나 우리가 처음부터 스타일링을 하는 것이 아니기
            때문에 기존 프로젝트에서
            <br /> 변화가 많이 필요했다 아래는 우리가 생각해낸 컨벤션이다.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
