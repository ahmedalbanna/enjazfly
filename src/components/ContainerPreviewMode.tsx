import { FunctionComponent, useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import HotelCardForm1 from "./HotelCardForm1";
import HotelCardForm3 from "./HotelCardForm3";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import styles from "./ContainerPreviewMode.module.css";

const ContainerPreviewMode: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.groupParent}>
        <div className={styles.switchToPreviewModeToViewParent}>
          <div className={styles.switchToPreview}>
            Switch to preview mode to view a live prototype running on code
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
            <div className={styles.homepage}>
              <div className={styles.heroSection}>
                <header className={styles.topHeader}>
                  <div className={styles.topContainer}>
                    <img
                      className={styles.fickleflightLogoIcon}
                      alt=""
                      src="/fickleflight-logo.svg"
                    />
                    <div className={styles.navigationRight}>
                      <div className={styles.navigationMenu}>
                        <div className={styles.explore}>Explore</div>
                        <div className={styles.search}>Search</div>
                        <div className={styles.hotels}>Hotels</div>
                        <div className={styles.offers}>Offers</div>
                      </div>
                      <div className={styles.accountSection}>
                        <img
                          className={styles.hamburgerMenuIcon}
                          alt=""
                          src="/notification2.svg"
                        />
                        <img
                          className={styles.notificationBellIcon}
                          alt=""
                          src="/notification3.svg"
                        />
                        <img
                          className={styles.unsplashd1upkifd04aIcon}
                          alt=""
                          src="/top_avatar1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </header>
                <div className={styles.searchSection}>
                  <div className={styles.bannerGradient} />
                  <img
                    className={styles.bannerBackground}
                    alt=""
                    src="/banner--background@2x.png"
                  />
                  <div className={styles.searchContainer}>
                    <div className={styles.title}>
                      <div
                        className={styles.letsExplore}
                      >{`Let’s explore & travel the world`}</div>
                      <div className={styles.findTheBest}>
                        Find the best destinations and the most popular stays!
                      </div>
                    </div>
                    <div className={styles.searchForm}>
                      <div className={styles.inputsRow}>
                        <div className={styles.inputGroup}>
                          <Autocomplete
                            className={styles.departureField}
                            size="medium"
                            disablePortal
                            options={[
                              "Singapore (SIN)",
                              "Sydney (SYD)",
                              "Siem Reap (REP)",
                              "Shanghai (PVG)Sanya (SYX)",
                            ]}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                color="primary"
                                label="Departure"
                                variant="outlined"
                                placeholder=""
                                helperText=""
                              />
                            )}
                            defaultValue="Singapore -  Changi (SIN)"
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <div className={styles.arrivalField}>
                            <div className={styles.input}>
                              <div className={styles.labelContainer}>
                                <div className={styles.arrival}>Arrival</div>
                              </div>
                              <div className={styles.active}>
                                <div className={styles.muiautocompletetag}>
                                  <div className={styles.chip}>
                                    <div className={styles.container}>
                                      <div className={styles.avatar}>
                                        <div className={styles.op}>F</div>
                                      </div>
                                      <div className={styles.typography}>
                                        <div className={styles.chip1}>Chip</div>
                                      </div>
                                      <img
                                        className={styles.notificationBellIcon}
                                        alt=""
                                        src="/cancel.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.chip}>
                                    <div className={styles.container}>
                                      <div className={styles.avatar}>
                                        <div className={styles.op}>F</div>
                                      </div>
                                      <div className={styles.typography}>
                                        <div className={styles.chip1}>Chip</div>
                                      </div>
                                      <img
                                        className={styles.notificationBellIcon}
                                        alt=""
                                        src="/cancel1.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.losAngelesLa}>
                                  Los Angeles (LA)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputGroup}>
                          <div className={styles.departureField}>
                            <DatePicker
                              label="Date"
                              value={dateFieldDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setDateFieldDateTimePickerValue(newValue);
                              }}
                              slotProps={{
                                textField: {
                                  variant: "outlined",
                                  size: "medium",
                                  fullWidth: true,
                                  color: "primary",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buttonGroup}>
                        <div className={styles.searchFlightsButton}>
                          <div className={styles.button}>Search flights</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.homeContents}>
                <div className={styles.upcomingFlightSection}>
                  <b className={styles.upcomingFlight}>Upcoming Flight</b>
                  <div className={styles.flightDetails}>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>SIN</b>
                          <div className={styles.singapore}>Singapore</div>
                        </div>
                        <div className={styles.duration}>
                          <b className={styles.h55m}>15H 55M</b>
                          <img
                            className={styles.durationChild}
                            alt=""
                            src="/group-17.svg"
                          />
                        </div>
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>LAX</b>
                          <div className={styles.losAngeles}>Los Angeles</div>
                        </div>
                      </div>
                      <div className={styles.horizontalLine} />
                      <div className={styles.departureDetails}>
                        <div className={styles.departsOn1}>
                          Departs on: 1 May, 08:00 AM
                        </div>
                        <div className={styles.daysToGoContainer}>
                          <b>4 days</b>
                          <span> to go</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineSeparator} />
                    <div className={styles.prepareMenu}>
                      <div className={styles.prepareForYour}>
                        Prepare for your trip
                      </div>
                      <div className={styles.tripMenus}>
                        <button className={styles.hotel}>
                          <img
                            className={styles.hotelChild}
                            alt=""
                            src="/group-211.svg"
                          />
                          <div className={styles.hotel1}>Hotel</div>
                        </button>
                        <button className={styles.hotel}>
                          <div className={styles.hotelChild}>
                            <div className={styles.groupItem} />
                            <img
                              className={styles.groupIcon}
                              alt=""
                              src="/group15.svg"
                            />
                          </div>
                          <div className={styles.attractions1}>Attractions</div>
                        </button>
                        <button className={styles.hotel}>
                          <img
                            className={styles.hotelChild}
                            alt=""
                            src="/group-212.svg"
                          />
                          <div className={styles.eats1}>Eats</div>
                        </button>
                        <button className={styles.hotel}>
                          <div className={styles.hotelChild}>
                            <div className={styles.groupInner} />
                            <img
                              className={styles.vectorIcon}
                              alt=""
                              src="/vector1.svg"
                            />
                          </div>
                          <div className={styles.commute1}>Commute</div>
                        </button>
                        <button className={styles.hotel}>
                          <div className={styles.rectangleContainer}>
                            <div className={styles.rectangleDiv} />
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="/vector2.svg"
                            />
                          </div>
                          <div className={styles.taxi1}>Taxi</div>
                        </button>
                        <button className={styles.hotel}>
                          <div className={styles.hotelChild}>
                            <div className={styles.groupChild1} />
                            <img
                              className={styles.vectorIcon2}
                              alt=""
                              src="/vector3.svg"
                            />
                          </div>
                          <div className={styles.movies1}>Movies</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.popDestinationsMain}>
                  <div className={styles.destinationsTitles}>
                    <div className={styles.titleContainer}>
                      <b className={styles.prepareForYour}>
                        Plan your next trip
                      </b>
                      <b className={styles.mostPopularDestinations}>
                        Most Popular Destinations
                      </b>
                    </div>
                    <a className={styles.viewAllTop}>
                      <div className={styles.viewAllDestinations}>
                        View all destinations
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.cardsContainer}>
                    <button className={styles.card1}>
                      <div className={styles.unsplashnnzkznywhauParent}>
                        <img
                          className={styles.unsplashnnzkznywhauIcon}
                          alt=""
                          src="/unsplashnnzkznywhau@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.paris}>Paris</b>
                          <div className={styles.parent}>
                            <div className={styles.div}>$699</div>
                            <div className={styles.from}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.card1}>
                      <div className={styles.unsplashnnzkznywhauParent}>
                        <img
                          className={styles.unsplashnnzkznywhauIcon}
                          alt=""
                          src="/unsplashyc8qqp50bda@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.paris}>Greece</b>
                          <div className={styles.group}>
                            <div className={styles.div1}>$1079</div>
                            <div className={styles.from1}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.card1}>
                      <div className={styles.unsplashnnzkznywhauParent}>
                        <img
                          className={styles.unsplashnnzkznywhauIcon}
                          alt=""
                          src="/unsplashltnpejwdsay@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.paris}>Norway</b>
                          <div className={styles.parent}>
                            <div className={styles.div}>$895</div>
                            <div className={styles.from}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.card1}>
                      <div className={styles.unsplashnnzkznywhauParent}>
                        <img
                          className={styles.unsplashnnzkznywhauIcon}
                          alt=""
                          src="/unsplashm0oiyn5u8zm@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.paris}>Tuscany</b>
                          <div className={styles.parent2}>
                            <div className={styles.div3}>$1245</div>
                            <div className={styles.from3}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.viewAllBottom}>
                    <div className={styles.viewAllDestinations1}>
                      View all destinations
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
                <div className={styles.recommendedHolidaysContainer}>
                  <div className={styles.recTitle}>
                    <b className={styles.recommendedHolidays}>
                      Recommended Holidays
                    </b>
                    <a className={styles.viewAllHolidaysParent}>
                      <div className={styles.viewAllHolidays}>
                        View all holidays
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright2.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.recCardsContainer}>
                    <button className={styles.recCard1}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="/unsplash5mv818tzxeo@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Bali</div>
                            <div className={styles.d3n}>4D3N</div>
                          </div>
                          <div className={styles.div4}>$899</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard1}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="/unsplashj82dskoxvy8@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Switzerland</div>
                            <div className={styles.d3n}>6D5N</div>
                          </div>
                          <div className={styles.div5}>$900</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard3}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="/unsplash4ezkckxolre@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Boracay</div>
                            <div className={styles.d3n}>5D4N</div>
                          </div>
                          <div className={styles.div4}>$699</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard4}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="/unsplashuyqmxhjr3ne@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Palawan</div>
                            <div className={styles.d3n}>4D3N</div>
                          </div>
                          <div className={styles.div7}>$789</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.viewAllBottom1}>
                    <div className={styles.viewAllHolidays1}>
                      View all holidays
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright3.svg"
                    />
                  </div>
                </div>
                <form className={styles.popularStays}>
                  <div className={styles.popularStaysHeader}>
                    <div className={styles.popularStaysTitle}>
                      <b className={styles.popularStays1}>Popular Stays</b>
                    </div>
                    <a className={styles.viewAllStaysParent}>
                      <div className={styles.viewAllStays}>View all stays</div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="/arrowright4.svg"
                      />
                    </a>
                  </div>
                  <div className={styles.hotelCards}>
                    <HotelCardForm1
                      propertyDimensions="/unsplashhhrfsdwxxus@2x.png"
                      accommodationType="Entire bungalow"
                      hotelName="Matterhorn Suites"
                      pricePerNight="$575/night"
                      imageDimensions="/video1.svg"
                      reviewCount="(60 reviews)"
                      rating="4.9"
                      carDimensionsOriginalProp="/vector4.svg"
                    />
                    <HotelCardForm3
                      roomDimensions="/unsplashtsn8bpopveo@2x.png"
                      accommodationType="2-Story beachfront suite"
                      accommodationName="Discovery Shores"
                      pricePerNight="$360/night"
                      reviewCount="(116 reviews)"
                      rating="4.8"
                      imageDimensions="/vector5.svg"
                    />
                    <HotelCardForm3
                      roomDimensions="/unsplashrlwe8f8anoc@2x.png"
                      accommodationType="Single deluxe hut"
                      accommodationName="Arctic Hut "
                      pricePerNight="$420/night"
                      reviewCount="(78 reviews)"
                      rating="4.7"
                      imageDimensions="/vector6.svg"
                      propWidth="37.57%"
                      propRight="62.43%"
                    />
                    <HotelCardForm1
                      propertyDimensions="/unsplashyqrybvxug5q@2x.png"
                      accommodationType="Deluxe King Room"
                      hotelName="Lake Louise Inn"
                      pricePerNight="$244/night"
                      imageDimensions="/video2.svg"
                      reviewCount="(63 reviews)"
                      rating="4.6"
                      carDimensionsOriginalProp="/vector7.svg"
                    />
                  </div>
                  <div className={styles.viewAllStaysGroup}>
                    <div className={styles.viewAllStays1}>View all stays</div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/arrowright5.svg"
                    />
                  </div>
                </form>
              </div>
              <div className={styles.footerSection}>
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-186@2x.png"
                  />
                  <div className={styles.shareYourTravelsForm}>
                    <div className={styles.formHeader}>
                      <b className={styles.prepareForYour}>
                        subscribe to our newsletter
                      </b>
                      <b className={styles.formTitle}>Get weekly updates</b>
                    </div>
                    <div className={styles.form}>
                      <div className={styles.formText}>
                        <div className={styles.fillInYour}>
                          Fill in your details to join the party!
                        </div>
                      </div>
                      <div className={styles.formFields}>
                        <div className={styles.formText}>
                          <TextField
                            className={styles.input1}
                            color="primary"
                            label="Your name"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                        <div className={styles.formText}>
                          <TextField
                            className={styles.input1}
                            color="primary"
                            label="Email address"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                      </div>
                      <button className={styles.button1}>
                        <VariantContainedSizeLarge
                          button="submit"
                          variantContainedSizeLargeBoxSizing="border-box"
                          variantContainedSizeLargePadding="2.0064077377319336px 5.517621040344238px"
                          buttonColor="#fff"
                          buttonDisplay="inline-block"
                          buttonFontSize="3.76px"
                          buttonLineHeight="6.52px"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <footer className={styles.footer}>
                  <div className={styles.fickleflightBio}>
                    <img
                      className={styles.fickleflightLogoIcon}
                      alt=""
                      src="/logo1.svg"
                    />
                    <div className={styles.fickleFlightIs}>
                      Fickle Flight is your one-stop travel portal. We offer
                      hassle free flight and hotel bookings. We also have all
                      your flight needs in you online shop.
                    </div>
                    <img
                      className={styles.socialIcons}
                      alt=""
                      src="/social-icons1.svg"
                    />
                  </div>
                  <div className={styles.footerChild} />
                  <div className={styles.footerLinks}>
                    <div className={styles.company}>
                      <a className={styles.aboutUs}>About Us</a>
                      <div className={styles.company1}>Company</div>
                      <div className={styles.news}>News</div>
                      <div className={styles.careers}>Careers</div>
                      <div className={styles.howWeWork}>How we work</div>
                    </div>
                    <div className={styles.company}>
                      <div className={styles.account}>Account</div>
                      <div className={styles.support1}>Support</div>
                      <div className={styles.supportCenter}>Support Center</div>
                      <div className={styles.faq}>FAQ</div>
                      <div className={styles.accessibility}>Accessibility</div>
                    </div>
                    <div className={styles.more}>
                      <div className={styles.covidAdvisory}>Covid Advisory</div>
                      <div className={styles.more1}>More</div>
                      <div className={styles.airlineFees}>Airline Fees</div>
                      <div className={styles.tips}>Tips</div>
                      <div className={styles.howWeWork}>Quarantine Rules</div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <img
              className={styles.image18Icon1}
              alt=""
              src="/image-181@2x.png"
            />
            <img className={styles.groupChild2} alt="" src="/vector-60.svg" />
            <img
              className={styles.screenshot20220302At758}
              alt=""
              src="/screenshot-20220302-at-758-1@2x.png"
            />
          </div>
          <div className={styles.previewYourWorkParent}>
            <b className={styles.previewYourWork}>Preview your work</b>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <b className={styles.b}>3</b>
            </div>
          </div>
        </div>
        <div className={styles.onceYouAre}>
          Once you are satisfied with your changes, you can finalize your
          framework settings before exporting
        </div>
        <div className={styles.exportYourProjectParent}>
          <b className={styles.previewYourWork}>Export your project</b>
          <div className={styles.ellipseGroup}>
            <div className={styles.ellipseDiv} />
            <b className={styles.b}>4</b>
          </div>
        </div>
        <img
          className={styles.screenshot20220302At812}
          alt=""
          src="/screenshot-20220302-at-812-1@2x.png"
        />
      </div>
    </LocalizationProvider>
  );
};

export default ContainerPreviewMode;
