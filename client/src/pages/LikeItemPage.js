import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { Mobile } from "../MediaQuery";
import useStyles from "../styles/RecentItemPageStyle";
import Navbar from "../components/common/Navbar";
import Infinite from "../components/MainPage/Infinite";
import TextTitleComponent from "../components/SimilarItemPage/TextTitleComponent";
import NoItemTemplate from "../components/SimilarItemPage/NoItemTemplate"


export default function LikeItemPage() {
  const classes = useStyles();
  const [dataList, setDataList] = useState([1, 2, 3, 4, 5, 6]);


  if (dataList.length > 0) {
    return (
      <Mobile>
        <Navbar />
        <TextTitleComponent
          title="찜한 상품"
          number="100"
        />
        <Grid className={classes.mobileRoot}>
          <Grid container>
            <Infinite />
          </Grid>
        </Grid>
      </Mobile>
    );
  } 
  else {
    return (
      <Mobile>
        <Box className={classes.mobileContainer}>
          <Navbar />
          <Box className={classes.mobileEmptyBox} />
          <NoItemTemplate title="최근에 본 상품이 없어요" subtitle="클릭하시면 비슷한 상품을 모아서 볼 수 있어요" buttontext="클로젯 추가하기" buttonUrl="" />
        </Box>
      </Mobile>
    );
  }
}

