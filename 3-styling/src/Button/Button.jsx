import styles from './Button.module.css'

// const styles = {
//   backgroundColor: "hsl(200, 100%, 50%)",
//   color: "white",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   border: "none",
//   cursor: "pointer",

// }

function Button(){
  return(
    <>
    {/* /*modules css*/ }
     <button className={styles.button}>Click me</button>

      {/* inline css
     <button style={styles}></button> */}
    </>
  );
}

export default Button