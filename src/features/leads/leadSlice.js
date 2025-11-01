import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getLeadsContent = createAsyncThunk('/leads/content', async () => {
// const response = await axios.get('public/data/list.json', {})
//     console.log("fff", response)
// 	return response.data;
 try {
    const response = await axios.get('http://148.113.17.120:3002/data/list.json'); 
    console.log("Fetched Data:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
})

export const leadsSlice = createSlice({
    name: 'leads',
    initialState: {
        isLoading: false,
        leads : [],
           totalRecords: 0,  
    },
    reducers: {


        addNewLead: (state, action) => {
          
            let {newLeadObj} = action.payload
           
            state.leads = [...state.leads, newLeadObj]
             console.log("dataaaaa:", state.leads)
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.leads.splice(index, 1)
        }
    },

    extraReducers: {
		[getLeadsContent.pending]: state => {
			state.isLoading = true
		},
		[getLeadsContent.fulfilled]: (state, action) => {
			 state.leads = action.payload.aaData || []; // Use `aaData` for the actual list of leads
        state.totalRecords = action.payload.iTotalRecords || 0;
			state.isLoading = false
		},
		[getLeadsContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewLead, deleteLead } = leadsSlice.actions

export default leadsSlice.reducer