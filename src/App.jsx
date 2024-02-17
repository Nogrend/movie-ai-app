import './App.css'
import {Card, Layout} from "antd";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Outlet} from "@tanstack/react-router";
import MovieSearchBar from "./components/movieSearch/MovieSearchBar.jsx";

const {Header, Footer, Content} = Layout

function App() {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Layout className="layout">
                <Header className="header">
                    <div className="header-div">
                        <img className="header-image" src="/old-movie-camera.svg" alt="Vite"/>
                        <MovieSearchBar/>
                    </div>
                </Header>
                <Content className="content">
                    <div className="site-layout-content">
                        <Outlet/>
                    </div>
                </Content>
                <Footer className="footer">Powered by MovingUp</Footer>
            </Layout>
        </QueryClientProvider>
    )
}

export default App
