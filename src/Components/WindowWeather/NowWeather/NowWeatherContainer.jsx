import { connect } from "react-redux";
import { addCityActionCreator, updateCityActionCreator } from "../../redux/cities-reducer";

// function DialogsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let onAddMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 };
//                 let onMessageText = (text) => {
//                     let action = updateNewMessagetTextActionCreator(text);
//                     store.dispatch(action);
//                 };
//                 return (
//                     <Dialogs
//                         updateNewMessageText={onMessageText}
//                         addMessage={onAddMessage}
//                         messagesPage={state.messagesPage}
//                         newMessageText={state.messagesPage.newMessageText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        cities: state.citiesList,
        newCurrentCity: state.citiesList.newCurrentCity,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCity: () => {
            dispatch(addCityActionCreator());
        },
        updateCity: (city) => {
            dispatch(updateCityActionCreator(city));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(NowWeather);

export default DialogsContainer;
