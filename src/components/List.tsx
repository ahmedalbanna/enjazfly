import { FunctionComponent } from "react";
import IconFalseHoverFalseDisab from "./IconFalseHoverFalseDisab";
import ContentTypeTextOnlyState from "./ContentTypeTextOnlyState";
import styles from "./List.module.css";

const List: FunctionComponent = () => {
  return (
    <div className={styles.list}>
      <IconFalseHoverFalseDisab
        option="Singapore - Changi (LAX)"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabHeight="36px"
        iconFalseHoverFalseDisabAlignSelf="unset"
      />
      <ContentTypeTextOnlyState
        option1="Ninoy Aquiono International Airport (NAIA"
        contentTypeTextOnlyStateAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Mactan International Airport (MIA)"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Clark International Airport (CIA)"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Charles de Gaulle Airport (CGA)"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabHeight="unset"
        iconFalseHoverFalseDisabAlignSelf="unset"
      />
    </div>
  );
};

export default List;
