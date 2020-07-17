import React from 'react';
import Button from '../../components/button';
import * as css from './style';

const Home = () => {
    const styles = { backgroundColor: '#3AB361' }
    return (
        <css.Page>
            <css.Container>
                <css.FormWrapper>
                    <css.Heading>Welcome to Quiz Dashboard</css.Heading>
                    <Button styles={styles} to='/dashboard'>Let's Go</Button>
                </css.FormWrapper>
            </css.Container>
        </css.Page>
    )
}
export default Home;