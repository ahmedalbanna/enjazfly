import { FunctionComponent } from "react";
import ContainerGettingStarted from "../components/ContainerGettingStarted";
import AutocompleteDropdownContainer from "../components/AutocompleteDropdownContainer";
import PreviewContainer from "../components/PreviewContainer";
import AirportDropdownContainer from "../components/AirportDropdownContainer";
import TagContainer from "../components/TagContainer";
import Header1 from "../components/Header1";
import ActionContainer from "../components/ActionContainer";
import GettingStartedContainer from "../components/GettingStartedContainer";
import HotelsPageContainer from "../components/HotelsPageContainer";
import FrameworkContainer from "../components/FrameworkContainer";
import BuilderContainer from "../components/BuilderContainer";
import ContainerPreviewMode from "../components/ContainerPreviewMode";
import styles from "./Instructions.module.css";

const Instructions: FunctionComponent = () => {
  return (
    <div className={styles.instructions}>
      <div className={styles.div}>
        <ContainerGettingStarted />
        <div className={styles.div1}>
          <div className={styles.child} />
          <b className={styles.b}>2</b>
        </div>
      </div>
      <b className={styles.instructions1}>Instructions</b>
      <div className={styles.gettingStartedTagging}>
        <div className={styles.taggingYourLayersParent}>
          <div className={styles.taggingYourLayers}>Tagging your Layers</div>
          <div className={styles.gettingStarted}>Getting Started</div>
        </div>
        <div
          className={styles.startByTagging}
        >{`Start by tagging the layers on this  Fickle Flight Figma file. `}</div>
        <div className={styles.greatJobYouve}>
          Great job! You’ve just tagged a button! Let’s try tagging another
          layer.
        </div>
        <div className={styles.awesomeYouveNowContainer}>
          <span>{`Awesome! You’ve now tagged a `}</span>
          <b>button</b>
          <span>{` and an `}</span>
          <b>autocomplete</b>
          <span>.</span>
        </div>
        <div className={styles.selectTheSearchFlightsBuParent}>
          <div className={styles.selectTheSearchContainer}>
            <span>{`Select the “Search Flights” button on the design to the right and select `}</span>
            <b>Button</b>
            <span> in the Tag Layers widget in the Locofy plugin</span>
          </div>
          <div className={styles.selectTheLayerParent}>
            <b className={styles.selectTheLayer}>Select the LAYER</b>
            <div className={styles.ellipseParent}>
              <div className={styles.groupChild} />
              <b className={styles.b1}>1</b>
            </div>
          </div>
        </div>
        <div className={styles.selectTheArrivalFieldOnParent}>
          <div className={styles.selectTheSearchContainer}>
            <span>{`Select the “Arrival field” on the design and select `}</span>
            <b>Autocomplete</b>
            <span> on the Tag Layers widget in the plugin.</span>
          </div>
          <div className={styles.selectTheLayerParent}>
            <b className={styles.selectTheLayer}>Select the LAYER</b>
            <div className={styles.ellipseParent}>
              <div className={styles.groupChild} />
              <b className={styles.b1}>1</b>
            </div>
          </div>
        </div>
        <div className={styles.gettingStartedTaggingInner}>
          <div className={styles.forNowSelectNoneForThisParent}>
            <div className={styles.forNowSelectContainer}>
              <p className={styles.forNowSelectNoneForThis}>
                <span
                  className={styles.forNowSelect}
                >{`For now, select `}</span>
                <b className={styles.forNowSelect}>None</b>
                <span>{` for this Button example. `}</span>
              </p>
              <p className={styles.forNowSelectNoneForThis}>
                You’ll see how to work with UI libraries later!
              </p>
            </div>
            <div className={styles.selectUiLibraryParent}>
              <b className={styles.selectTheLayer}>Select UI Library</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b1}>2</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gettingStartedTaggingChild}>
          <div className={styles.thisAutocompleteComesFromTParent}>
            <div className={styles.forNowSelectContainer}>
              {`This Autocomplete comes from the `}
              <a
                className={styles.materialUiDesignKit}
                href="https://material-ui.com/store/items/figma-react/"
                target="_blank"
              >
                <span className={styles.materialUiDesign}>
                  Material UI design kit
                </span>
              </a>
              , so please select Material UI. Then, choose the outlined
              variation.
            </div>
            <div className={styles.selectUiLibraryVariationParent}>
              <b
                className={styles.selectTheLayer}
              >{`Select UI Library & Variation`}</b>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <b className={styles.b1}>2</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.youCanEditAttributesForYoParent}>
          <div className={styles.selectTheSearchContainer}>
            You can edit attributes for your button. For now, leave these
            attributes as default.
          </div>
          <div className={styles.editBasicAndAdvancedAttribParent}>
            <b className={styles.editBasicAnd}>
              edit basic and advanceD attributes
            </b>
            <div className={styles.ellipseParent1}>
              <div className={styles.groupChild1} />
              <b className={styles.b5}>3</b>
            </div>
          </div>
        </div>
        <div className={styles.gettingStartedTaggingItem} />
        <div className={styles.lineDiv} />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <div className={styles.image11Parent}>
          <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
          <div className={styles.groupChild2} />
        </div>
        <div className={styles.image13Parent}>
          <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.groupChild3} />
        </div>
        <div className={styles.tryTaggingA}>TRY: tagging a button</div>
        <div className={styles.taggingAnAutocomplete}>
          tagging aN AUTOCOMPLETE
        </div>
        <img className={styles.groupIcon} alt="" src="/group-7511@2x.png" />
        <div className={styles.image15Parent}>
          <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          <div className={styles.groupChild4} />
        </div>
        <div className={styles.leaveTheOther}>
          Leave the other attributes unchanged for now.
        </div>
        <div className={styles.inTheAttributesSectionLooParent}>
          <div className={styles.selectTheSearchContainer}>
            In the attributes section, look for “Options” and add a few items.
            Eg. Norway, Italy, Spain
          </div>
          <div className={styles.editBasicAndAdvancedAttribParent}>
            <b className={styles.editBasicAnd}>edit attributes</b>
            <div className={styles.ellipseParent1}>
              <div className={styles.groupChild1} />
              <b className={styles.b5}>5</b>
            </div>
          </div>
        </div>
        <div className={styles.selectAPalletteThatFitsThParent}>
          <div className={styles.selectTheSearchContainer}>
            Select a pallette that fits the colors of your selected component
          </div>
          <div className={styles.editBasicAndAdvancedAttribParent}>
            <b className={styles.editBasicAnd}>Select a pallette</b>
            <div className={styles.ellipseParent1}>
              <div className={styles.groupChild1} />
              <b className={styles.b5}>4</b>
            </div>
          </div>
        </div>
        <AutocompleteDropdownContainer />
        <div className={styles.gettingStartedTaggingInner1}>
          <div className={styles.image14Parent}>
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
            <div className={styles.groupChild7} />
          </div>
        </div>
        <img
          className={styles.gettingStartedTaggingChild1}
          alt=""
          src="/group-656@2x.png"
        />
        <div className={styles.screenshot20220204At809Parent}>
          <img
            className={styles.screenshot20220204At809}
            alt=""
            src="/screenshot-20220204-at-809-1@2x.png"
          />
          <div className={styles.groupChild8} />
        </div>
        <div className={styles.popupPlugin1}>
          <PreviewContainer />
          <div className={styles.taggingFlowCustom}>
            <div className={styles.linkmodeLocate}>
              <div className={styles.linkmodeLocate}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle13.svg"
                />
                <div className={styles.group6}>
                  <div className={styles.linkmodeLocate}>
                    <div className={styles.cancel}>CANCEL</div>
                    <div className={styles.group7}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/rectangle14.svg"
                      />
                      <div className={styles.yesProceed}>YES, PROCEED</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle15.svg"
                />
                <div className={styles.youAreIn}>You are in Link Mode</div>
                <div
                  className={styles.youHaveSelected}
                >{`You have selected: `}</div>
                <div
                  className={styles.isThisThe}
                >{`Is this the correct dropdown? If ready, please proceed… `}</div>
                <div className={styles.group4Copy}>
                  <div className={styles.linkmodeLocate}>
                    <div className={styles.airportDropdown}>
                      Airport Dropdown
                    </div>
                    <img
                      className={styles.folderIcon}
                      alt=""
                      src="/folder1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          </div>
        </div>
        <AirportDropdownContainer />
      </div>
      <div className={styles.div2}>
        <div className={styles.child} />
        <b className={styles.b}>1</b>
      </div>
      <div className={styles.instructionsChild} />
      <div className={styles.instructionsItem} />
      <b className={styles.gettingStartedWith}>Getting Started with Locofy</b>
      <div className={styles.toGetStartedContainer}>
        <span>{`To get started, here is a quick guide to using the plugin. This is our responsive `}</span>
        <b>Fickle Flight Website</b>
        <span> Sample project.</span>
      </div>
      <TagContainer />
      <div className={styles.inThisGuided}>
        In this guided sample project, you will be:
      </div>
      <div className={styles.totalTime10To15MinutesParent}>
        <div className={styles.totalTime10}>Total time: 10 to 15 minutes</div>
        <img className={styles.groupChild9} alt="" src="/group-767.svg" />
      </div>
      <Header1 />
      <img className={styles.guideGuyIcon} alt="" src="/guide-guy.svg" />
      <ActionContainer />
      <div className={styles.div3}>
        <div className={styles.child} />
        <b className={styles.b}>3</b>
      </div>
      <GettingStartedContainer />
      <div className={styles.ellipseParent4}>
        <div className={styles.child} />
        <b className={styles.b}>4</b>
      </div>
      <div className={styles.gettingStartedSyncToStud}>
        <div className={styles.onceYouAre}>
          Once you are happy with your preview, you are now ready to sync to
          Locofy Builder where you can view and export your code.
        </div>
        <div className={styles.groupParent}>
          <div className={styles.onThisFigmaFileSelectTheParent}>
            <div className={styles.onThisFigma}>
              On this Figma file, select the frames you wish to sync and click
              the “View code” button.
            </div>
            <div className={styles.selectTheFramesParent}>
              <b className={styles.selectTheFrames}>Select the frames</b>
              <div className={styles.ellipseParent5}>
                <div className={styles.groupChild} />
                <b className={styles.b1}>1</b>
              </div>
            </div>
          </div>
          <HotelsPageContainer />
        </div>
        <div className={styles.syncToLocofyBuilderParent}>
          <div className={styles.syncToLocofyContainer}>
            <p className={styles.forNowSelectNoneForThis}>{`Sync to `}</p>
            <p className={styles.forNowSelectNoneForThis}>Locofy Builder</p>
          </div>
          <div className={styles.gettingStarted1}>Getting Started</div>
        </div>
        <FrameworkContainer />
      </div>
      <div className={styles.gettingStartedSyncToStud1}>
        <div className={styles.onceTheSync}>
          Once the sync is complete, you’ll be taken to the Locofy Builder.
        </div>
        <div className={styles.viewAndExportCodeOnLocofyParent}>
          <div className={styles.syncToLocofyContainer}>
            <p className={styles.forNowSelectNoneForThis}>{`View and `}</p>
            <p
              className={styles.forNowSelectNoneForThis}
            >{`Export code on `}</p>
            <p className={styles.forNowSelectNoneForThis}>Locofy Builder</p>
          </div>
          <div className={styles.gettingStarted1}>Getting Started</div>
        </div>
        <div className={styles.onceYourProjectHasBeenSynParent}>
          <div className={styles.onceYourProject}>
            Once your project has been synced, you can now view the code in the
            builder and make further changes.
          </div>
          <div className={styles.viewCodeAndMakeChangesParent}>
            <b className={styles.selectTheFrames}>View code and make changes</b>
            <div className={styles.ellipseParent5}>
              <div className={styles.groupChild} />
              <b className={styles.b1}>1</b>
            </div>
          </div>
          <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
        </div>
        <BuilderContainer />
        <ContainerPreviewMode />
        <div className={styles.youreDoneAfterExportingYParent}>
          <div className={styles.youreDoneAfter}>
            You’re done! After exporting your project, you will be shown the
            next steps to run your project.
          </div>
          <div className={styles.runYourProjectParent}>
            <b className={styles.selectTheFrames}>Run your project</b>
            <div className={styles.ellipseParent5}>
              <div className={styles.groupChild} />
              <b className={styles.b1}>5</b>
            </div>
          </div>
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
        </div>
      </div>
      <div className={styles.ellipseParent8}>
        <div className={styles.child} />
        <b className={styles.b}>5</b>
      </div>
      <div className={styles.ellipseParent9}>
        <div className={styles.child} />
        <b className={styles.b15}>6</b>
      </div>
      <div className={styles.tryTaggingTheSearchFlightParent}>
        <div
          className={styles.tryTaggingThe}
        >{`Try tagging the Search Flight button, Autocomplete field and Date & Time Picker`}</div>
        <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
      </div>
      <img className={styles.group2Icon} alt="" src="/group21.svg" />
      <div className={styles.useThisAs}>
        Use this as the Autocomplete Dropdown
      </div>
      <img className={styles.group2Icon1} alt="" src="/group22.svg" />
      <img className={styles.instructionsInner} alt="" src="/vector-7.svg" />
      <div className={styles.tryDefiningBehaviourRespoParent}>
        <div
          className={styles.tryDefiningBehaviour}
        >{`Try defining behaviour & responsiveness for the “Show more results” button`}</div>
        <div className={styles.makeSureYou}>
          ( Make sure you tag the button first )
        </div>
        <img className={styles.groupChild16} alt="" src="/vector-71.svg" />
      </div>
      <img className={styles.group3Icon} alt="" src="/group31.svg" />
      <div className={styles.tryAddingAnActionToThePlParent}>
        <div className={styles.tryAddingAn}>
          Try adding an action to the Play Video button in this screen
        </div>
        <img className={styles.groupChild17} alt="" src="/vector-8.svg" />
      </div>
      <img className={styles.group3Icon1} alt="" src="/group32.svg" />
      <div className={styles.chooseThisAsYourPopUpParent}>
        <div className={styles.chooseThisAs}>Choose this as your pop-up</div>
        <img className={styles.groupChild18} alt="" src="/vector-10.svg" />
        <div className={styles.makeSureYou1}>
          ( Make sure you tag this as a pop-up first )
        </div>
      </div>
      <img className={styles.group2Icon2} alt="" src="/group23.svg" />
    </div>
  );
};

export default Instructions;
