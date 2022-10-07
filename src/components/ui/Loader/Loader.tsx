import classes from './Loader.module.css'

const Loader: React.FC = (): JSX.Element => {
    return (
      <div className={classes['spinner-container']}>
        <div className={classes['loading-spinner']}></div>
      </div>
    );
  }

export default Loader;