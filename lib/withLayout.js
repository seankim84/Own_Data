import React from 'react'

const withLayout = Component => {
    return class withLayout extends React.Component {
        render(){
            return(
                <div>
                    <Header />
                    <Component />
                </div>
            );
        } 
    };
};

export default withLayout;