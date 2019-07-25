<style scoped>
    .expand-row{
        margin-bottom: 16px;
        background: #e8eaec;
    }
    p{
        font-weight: 800;
    }
   span{
       height:40px;
       display: block;
       margin-top:20px; 
   }
</style>
<template>
    <div class='expand-row'>
        <!-- 首页子表格 -->
        <!-- <i-table :columns="columns2" :data="data2"></i-table> -->
        <Row class="expand-row" style='padding:20px 0 0 20px'>
            <Col span='1'>
                <p><Checkbox></Checkbox></p>
                <span class="expand-value"><Checkbox></Checkbox></span>
            </Col>
            <Col span="3" >
                <p class="expand-key">ItemNumber</p>
                <span class="expand-value">{{ row.ItemNumber }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Material</p>
                <span class="expand-value">{{ row.Material }}</span>
            </Col>
            <Col span="4">
                <p class="expand-key">Description <Icon type="md-arrow-up" style='fontSize:20px;color:blue;'/></p>
                <span class="expand-value">{{ row.Description }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Unit Price<Icon type="md-arrow-down" style='fontSize:20px;color:blue;'/></p>
                <span class="expand-value">{{ row.unitPrice }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Quantity</p>
                <span class="expand-value">{{ row.Quantity }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Sales Unit</p>
                <span class="expand-value">{{ row.salesUnit }}</span>
            </Col>
            <Col span="4">
                <p class="expand-key">Amount</p>
                <span class="expand-value">{{ row.Amount }}</span>
            </Col>
        </Row>
        <!-- 详情字表一 -->
        <!-- <Row class="expand-row" style='padding:20px 0 0 20px'>
            <Col span='1'>
                <p><Checkbox></Checkbox></p>
                <span class="expand-value"><Checkbox></Checkbox></span>
            </Col>
            <Col span="3" >
                <p class="expand-key">Item Number</p>
                <span class="expand-value">{{ row.ItemNumber }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Material</p>
                <span class="expand-value">{{ row.Material }}</span>
            </Col>
            <Col span="4">
                <p class="expand-key">Description <Icon type="md-arrow-up" style='fontSize:20px;color:blue;'/></p>
                <span class="expand-value">{{ row.Description }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Unit Price<Icon type="md-arrow-down" style='fontSize:20px;color:blue;'/></p>
                <span class="expand-value">{{ row.UnitPrice }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Quantity</p>
                <span class="expand-value">{{ row.Quantity }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Sales Unit</p>
                <span class="expand-value">{{ row.SalesUnit }}</span>
            </Col>
            <Col span="3">
                <p class="expand-key">Amount</p>
                <span class="expand-value">{{ row.Amount }}</span>
            </Col>
            
        </Row> -->
    </div>
</template>
<script>
import expandRow from './table-expand.vue';
    export default {
        components: { expandRow },
        // props: {
        //    data : data2,
        //    columns:columns2
        // }
        props:{
            row: Object
        }
    }
   
</script>