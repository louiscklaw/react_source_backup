import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCaller } from "../../api/apiCaller";
import { matchCenter } from "../../sharedfiles/EndpointConfig";
import { languageId, channelId } from "../../sharedfiles/constants";

export const RecentFormHADSlice = createSlice({
  name: "recentfromhad",
  initialState: {
    // selectedTab:'had',
    // graphData: [],
    // homeTeamData: [],
    // awayTeamData: [],
    // homeTeamName: '',
    // awayTeamName: '',
    // recent8Results:{}
  },
  reducers: {
    // selectTab:(state,action)=>{
    //   console.log(action.payload)
    //   state.selectedTab = action.payload;
    // },
    // setGraphData:(state,action)=>{
    //   console.log("hello hello...",action.payload)
    //   state.graphData = action.payload;
    //   state.homeTeamData = action.payload.recent8Results.homeTeam;
    //   state.awayTeamData = action.payload.recent8Results.awayTeam;
    //   state.homeTeamName = action.payload.homeTeamName;
    //   state.awayTeamName = action.payload.awayTeamName;
    //   // state.recent8Results = {
    //   //   homeTeamData : action.payload.recent8Results.homeTeam,
    //   //   awayTeamData : action.payload.recent8Results.awayTeam,
    //   //   homeTeam : action.payload.recent8Results.homeTeam,
    //   //   awayTeamData : action.payload.recent8Results.awayTeamName
    //   // }
    // }
  },
});

// export const { selectTab, setGraphData } = RecentFormHADSlice.actions;

// export const getGraphData = (params) => dispatch => {
//   console.log("endo emo...",params);
//   var url = matchCenter.getRecentformInformation+'?languageId='+languageId+'&channelId='+channelId+'&homeTeamId='+10472+'&awayTeamId='+10461+'&marketGroupId='+1+'&optionId='+1;
//   apiCaller(url,'GET',{}).then(response => {
//     if(response.data!=null && response.data){
//       dispatch(setGraphData(response.data))
//     }
//   })
// }

// export const selectSelectedTab = state => state.recentfromhad.selectedTab;
// export const homeTeamData = state => state.recentformhad.homeTeamData;

export default RecentFormHADSlice.reducer;
