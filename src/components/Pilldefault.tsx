import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pilldefault.module.css";

type PilldefaultType = {
  beds?: string;

  /** Style props */
  pilldefaultBackgroundColor?: CSSProperties["backgroundColor"];
  bedsColor?: CSSProperties["color"];
};

const Pilldefault: FunctionComponent<PilldefaultType> = ({
  beds,
  pilldefaultBackgroundColor,
  bedsColor,
}) => {
  const pilldefaultStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: pilldefaultBackgroundColor,
    };
  }, [pilldefaultBackgroundColor]);

  const bedsStyle: CSSProperties = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <div className={styles.pilldefault} style={pilldefaultStyle}>
      <div className={styles.beds} style={bedsStyle}>
        {beds}
      </div>
    </div>
  );
};

export default Pilldefault;
