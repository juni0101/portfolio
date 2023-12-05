import styles from '../../../styles/Home.module.css'

export default function 나만의페이지(){
   //js작성
   
  return(
    //html 작성
    <div className={styles.wrapper}>
      <h1>로그인</h1>
      <label className={styles.label}>아이디</label>
      <input className={styles.input} type="text" />
      <label className={styles.label}>비밀번호</label>
      <input className={styles.input} type="text"/>
    </div>
  )
}