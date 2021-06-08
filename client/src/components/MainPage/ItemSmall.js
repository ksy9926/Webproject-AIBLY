import { Grid, Box } from "@material-ui/core";
import useStyles from "styles/MainPageStyle";
import CustomFavoriteIcon from "components/MainPage/FavoriteIcon";

export default function ItemSmall({ idx }) {
  const classes = useStyles();
  const brand = "w.concept";
  const description = "Zella Live In High Walst Pocket 7/8 Leggings";
  const discount = "33%";
  const price = "57,300";

  return (
    <Box>
      <Box className={classes.mobileGlassSmallItemBox}>
        <Box className={classes.mobileSmallItemImageBox}>
          <img
            className={classes.mobileItemSmallImage}
            src="http://fpost.co.kr/board/data/editor/1902/af6295e29b76e6d52de0accea62b4e4b_1550713144_4274.jpg"
            alt="clothes"
          />
          {/* <Box className={classes.mobileFavIconBox}>
            <CustomFavoriteIcon idx={idx.toString()} />
          </Box> */}
        </Box>
        <Box className={classes.mobileItemSmInfoBox}>
          <Box className={classes.mobileItemSmBrandName}>{brand}</Box>
          <Box className={classes.mobileItemSmShortDescription}>{description}</Box>
          <Box className={classes.mobileItemSmDiscountPriceBox}>
            <Box className={classes.mobileItemSmDiscount}>{discount}</Box>
            <Box className={classes.mobileItemSmPrice}>{price}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
