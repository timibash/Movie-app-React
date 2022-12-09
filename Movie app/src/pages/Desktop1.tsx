    import { FunctionComponent } from 'react';
    import styles from './Desktop1.module.css';
   
  

  const Desktop1:FunctionComponent = () => {
    
    

    return (<div className={styles.desktop1}><div className={styles.headerDiv}><div className={styles.rectangleDiv} /><div className={styles.logoDiv}><div className={styles.rectangleDiv1} /><img className={styles.myTestAppIcon} alt="" src="../mytestapp.svg" /></div></div><div className={styles.searchDiv}><div className={styles.searchDiv1}>Search</div><div className={styles.rectangleDiv2} /></div><div className={styles.movieSetDiv}><div className={styles.frameDiv}><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div></div><div className={styles.movieCategoryName}>{`${Movie Category Name}`}</div></div><div className={styles.movieSetDiv1}><div className={styles.frameDiv}><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div></div><div className={styles.movieCategoryName}>{`${Movie Category Name}`}</div></div><div className={styles.heroDiv}><img className={styles.rectangleIcon} alt="" src="../rectangle-52@2x.png" /><b className={styles.watchSomethingIncredible}>Watch something incredible.</b></div></div>);
  }

  
  
  export default Desktop1
  