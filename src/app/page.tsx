import s from './page.module.scss';

export default function Home() {
  return (
    <>
      <h1 className={ s['tit-h1'] }>
        제목1
      </h1>
      <div className={ s['area-space'] }>
        여백
      </div>
      <h2 className={ s['tit-h2'] }>
        제목2
      </h2>
      <h3 className={ s['tit-h3'] }>
        제목3
      </h3>
      <p className={ s['txt-p1'] }>
        본문1
      </p>
      <p className={ s['txt-p2'] }>
        본문2
      </p>
      <p className={ s['txt-p3'] }>
        본문3
      </p>
      <p>
        scss로 디자인 시스템을 일관되게 유지하는 방법에 대해 관리합니다. <br />
        자세한 부분은 ./page.modules.scss와 /styles/*.scss를 참조해 주세요.
      </p>
    </>
  );
}
