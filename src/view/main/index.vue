<style scoped>

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 60px;
    height: 60px;
    /* background: #5b6270; */
    border-radius: 3px;
    float: left;
    position: relative;
    top: 2px;
    left: -50px;
    border:0;
}
.layout-nav{
    width: 620px;
    margin-left: 150px;
}
.layout-icon{
    width:100px;
    height:50px;
    position: fixed;
    right:30px;
    top:10px;
    float:left;
    }
.layout-icon .icon{
    color:#ccc;
}
.layout-content{
    margin-top:40px;
}
.layout-footer-center{
    text-align: center;
    color: #9ea7b4;
    position:fixed;
    left:0;
    bottom:10px;
    font-size:18px; 
    width:100%; 
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-key="1" >
                    <div class="layout-logo"><img src="../../assets/images/redicon.png" alt=""></div>
                    <div class="layout-nav">
                        <Menu-item  to='/order' name='' style='font-size:18px;'>
                            <Icon type="ios-navigate" style='font-size:18px;'></Icon>
                            OrderList
                        </Menu-item>
                        <Menu-item  to='/create' name='' style='font-size:18px;'>
                            <Icon type="ios-keypad" style='font-size:18px;'></Icon>
                            Create
                        </Menu-item>
                        <Menu-item  to='/return' name='' style='font-size:18px;'>
                            <Icon type="ios-analytics" style='font-size:18px;'></Icon>
                            Return
                        </Menu-item>
                        <Menu-item  to='/upload' name='' style='font-size:18px;'>
                            <Icon type="ios-paper" style='font-size:18px;'></Icon>
                            Upload
                        </Menu-item>
                    </div>
                    <div class='layout-icon'>
                        <img src="../../assets/images/photo.png" alt="">
                        
                    </div>
                </Menu>
            </Header>
            <Content>
                <div class="layout-content">
                    <router-view></router-view>
                </div>
            </Content>
            <Footer class='layout-footer-center'>@2018 Lenovo.All rights reserved</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:'Main'
            }
        }
    
    }
</script>