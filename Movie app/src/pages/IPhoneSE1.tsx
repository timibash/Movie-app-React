    import { FunctionComponent } from 'react';
    import {Button, Input} from '@chakra-ui/react';
    import {ArrowForwardIcon} from '@chakra-ui/icons';
    import styles from './IPhoneSE1.module.css';
   
  

  const IPhoneSE1:FunctionComponent = () => {
    
    

    return (<div className={styles.iPhoneSE1}><div className={styles.headerDiv}><div className={styles.rectangleDiv} /><Button className={styles.logoButton} variant="outline" w="108px" colorScheme="teal" rightIcon={<ArrowForwardIcon />}>Button</Button></div><div className={styles.searchDiv}><div className={styles.searchDiv1}>Search</div><Input className={styles.rectangleInput} variant="outline" width="265px" placeholder="Input" w="265px" /></div><div className={styles.movieSetDiv}><div className={styles.frameDiv}><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div></div><div className={styles.movieCategoryName}>{`${Movie Category Name}`}</div></div><div className={styles.movieSetDiv1}><div className={styles.frameDiv}><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div><div className={styles.frameDiv1}><div className={styles.movieNameDiv}>{`${Movie Name}`}</div></div></div><div className={styles.movieCategoryName}>{`${Movie Category Name}`}</div></div><div className={styles.heroDiv}><img className={styles.rectangleIcon} alt="" src="../rectangle-5@2x.png" /></div></div>);
  }

  
  
  export default IPhoneSE1
  