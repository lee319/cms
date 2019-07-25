<style>
  .layout-order-page{
    float: right;
    margin-top:10px;
}
    .ivu-table th,
    .ivu-table td {
        height: 40px;
    }
    .ordertxt,.potxt,.dntxt{
       width:80px;
       height:30px;
       line-height:30px;
       background:#808695;
       padding:2px;
       /* color:#657180; */
       text-align: left;
       color:#fff;
       border-radius: 10%;
    }
    .layout-order-search{
        position: relative;
    }
    .btn{
        position: absolute;
        right:10%;
        bottom:15%;
    }
    .ivu-table th.demo-table-info-column{
        background: #D3D3D3;
    }
</style>

<template>
    <div class='layout-order'>
         <!-- 搜索 -->
        <div class='layout-order-search'>
            <!-- <Form :model="search" inline>
                <FormItem label="Order Number:" :label-width="280">
                    <Input v-model="search.name" style="width:200%;" placeholder="Order Number..."></Input>
                </FormItem>
                <FormItem label="Product:" :label-width="280">
                    <Input v-model='search.name' style="width:200%;" placeholder="Product..."></Input>
                </FormItem>
                <FormItem label="PO Number:" :label-width="280">
                    <Input v-model='search.name' style="width:200%;" placeholder="PO Number..."></Input>
                </FormItem>
                <FormItem label="Status:" :label-width="280">
                    <Input v-model='search.name' style="width:200%;" placeholder="Status..."></Input>
                </FormItem>
                <FormItem label="Created On:" :label-width="280">
                    <Input v-model='search.name' style="width:200%;" placeholder="Created On..."></Input>
                </FormItem>
            </Form> -->
            <Form :model="search" label-position="top" inline style='padding:0 35px 0 35px;'>
                <FormItem label="Order Number">
                    <Input v-model="search.input1" style='width:400px;' placeholder='Order Number...'></Input>
                </FormItem>
                <FormItem label="Product">
                    <Input v-model="search.input2" style='width:400px;' placeholder='Product...'></Input>
                </FormItem>
                <FormItem label="PO Number">
                    <Input v-model="search.input3" style='width:400px;' placeholder='PO Number...'></Input>
                </FormItem>
                <FormItem label="Status:">
                    <Input v-model='search.input4' style="width:400px;" placeholder="Status..."></Input>
                </FormItem>
                <FormItem label="Created On:">
                    <Input v-model='search.input5' style="width:400px;" placeholder="Created On..."></Input>
                </FormItem>
            </Form>
                <Button type="primary" @click="query" class='btn'>Search</Button>
                <!-- <Button type='primary' @click='query' class='btns'>query</Button> -->
        </div>
        <!-- 列表 -->
        <div class="layout-order-table">
            <i-table :columns="columns1" :data="data1"></i-table>
        </div>
        <!-- 分页 -->
        <div class="layout-order-page">
            <Page :total="total" :current="page" :page-size='pageSize' @on-change="changePage" show-elevator />
        </div>
        <!-- 详情内列表 -->
        <Modal v-model="modalSee" title="details" width="90%">
            <!-- 详情表一 -->
            <div class="layout-order-table">
                <p label='Order' class='ordertxt'>Order</p>
                <i-table :columns="columns2" :data="data2"></i-table>
            </div>
            <!-- 详情表二 -->
            <div class="layout-order-table" style='margin-top:10px;'>
                <p class='potxt' label='PO'>PO</p>
                <i-table :columns="columns3" :data="data3"></i-table>
            </div>
            <!-- 详情表三 -->
            <div class="layout-order-table" style='margin-top:20px;'>
                <p  class='dntxt' label='DN'>DN</p>
                <i-table :columns="columns7" :data="data7"></i-table>
            </div>
        </Modal>
    </div>

</template>
<script>
import expandRow from './table-expand.vue';
export default {
    components: { expandRow },
    data() {
        return {
            // 搜索
            search:{
                input1:'',
                input2:'',
                input3:''
            },
            modalSee:false,//详情
            total: 0,
            page: 1,
            pageSize: 30,//分页
            columns1:[
                {
                    type: 'expand',
                    width: 10,
                    className:'demo-table-info-column',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    }
                },
                {
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    _checked:true,
                    className:'demo-table-info-column'
                },
                {
                    title: 'Order Type',
                    key: 'OrderType',
                    className:'demo-table-info-column'
                   
                },
                {
                    title: 'Sales Area',
                    key: 'SalesArea',
                    className:'demo-table-info-column', 
                    renderHeader: (h,params) => {
                        return h('div',[
                            h('normal','SalesArea'),
                            h("Icon",{
                                props:{
                                    type: 'md-arrow-down'
                                },
                                style: {
                                    marginleft:'15px',
                                    color:'blue',
                                    fontSize:'20px'
                                    
                                }
                            })
                        ])
                    }
                },
                {
                    title: 'Order Number',
                    key: 'OrderNumber',
                    className:'demo-table-info-column',
                    renderHeader: (h, params) => {
                        return h('div',[
                            h('normal','OrderNumber'),
                            h("Icon",{
                                props:{
                                    type: 'md-arrow-up',
                                },
                                style: {
                                    marginRight:'15px',
                                    color:'blue',
                                    fontSize:'20px'
                                }
                            })
                        ])
                    }
                },
                {
                    title: 'Customer',
                    key: 'Customer',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Net Value',
                    key: 'NetValue',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Status',
                    key: 'Status',
                    className:'demo-table-info-column'
                   
                },
                {
                    title: 'Created On',
                    key: 'CreatedOn',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Created By',
                    key: 'CreatedBy',
                    className:'demo-table-info-column'
                },
                 {
                    title: "操作",
                    align: "center",
                    width: 100,
                    className:'demo-table-info-column',
                    render: (h, params) => {
                        return h("div", [
                        h(
                            "Button",
                            {
                            props: {
                                type: "primary",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: () => {
                                this.SeeModal(params.row);
                                }
                            }
                            },"details")
                        ]);
                    }
                }
            ],
            data1:[
                {
                   OrderType: 'LI-Std Sales Order',
                   SalesArea:'JP10/11/00',
                   OrderNumber:'4210045397',
                   Customer:'日本電計　株式会社',
                   NetValue:'163000',
                   Status:'Completed',
                   CreatedOn:'2008/9/25',
                   CreatedBy:'CNDL000011',
                   ItemNumber:'10',
                   Material:'9174A74',
                   Description:'TC M57 TOWER (9174A74)',
                   unitPrice:'98000',
                   Quantity:'1',
                   salesUnit:'EA',
                   Amount:'163,000'
                },
                {
                   OrderType: 'LI-Std Sales Order',
                   SalesArea:'JP10/11/00',
                   OrderNumber:'4210045397',
                   Customer:'日本電計　株式会社',
                   NetValue:'163000',
                   Status:'Completed',
                   CreatedOn:'2008/9/25',
                   CreatedBy:'CNDL000011',
                   ItemNumber:'10',
                   Material:'9174A74',
                   Description:'TC M57 TOWER (9174A74)',
                   unitPrice:'98000',
                   Quantity:'1',
                   salesUnit:'EA',
                   Amount:'163,000'
                }
            ],
            //详情内表一
            columns2:[
                {
                    type: 'expand',
                    width: 10,
                    className:'demo-table-info-column',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    }
                },
                {
                    title: 'Order Type',
                    key: 'OrderType',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Sales Area',
                    key: 'SalesArea',
                    className:'demo-table-info-column',
                    renderHeader: (h,params) => {
                        return h('div',[
                            h('normal','SalesArea'),
                            h("Icon",{
                                props:{
                                    type: 'ios-papers'
                                },
                                style: {
                                    marginleft:'5px',
                                    
                                }
                            })
                        ])
                    }
                },
                {
                    title: 'Order Number',
                    key: 'OrderNumber',
                    className:'demo-table-info-column',
                    renderHeader: (h, params) => {
                        return h('div',[
                            h('normal','OrderNumber'),
                            h("Icon",{
                                props:{
                                    type: 'person',
                                },
                                style: {
                                    marginRight:'5px'
                                }
                            })
                        ])
                    }
                },
                {
                    title: 'Customer',
                    key: 'Customer',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Net Value',
                    key: 'NetValue',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Status',
                    key: 'Status',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Created On',
                    key: 'CreatedOn',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Created By',
                    key: 'CreatedBy',
                    className:'demo-table-info-column'
                }
            ],
            data2:[
                {
                   OrderType: 'LI-Std Sales Order',
                   SalesArea:'JP10/11/00',
                   OrderNumber:'4210045397',
                   Customer:'日本電計　株式会社',
                   NetValue:'163000',
                   Status:'Completed',
                   CreatedOn:'2008/9/26',
                   CreatedBy:'CNDL000011',
                   ItemNumber:'10',
                   Material:'9174A74',
                   Description:'TC M57 TOWER (9174A74)',
                   UnitPrice:'98000',
                   Quantity:'1',
                   SalesUnit:'EA',
                   Amount:'163,000'
                }
            ],
            // columns4:[
            //     {
            //         title: 'Item Number',
            //         key: 'ItemNumber',
                    
                   
            //     },
            //     {
            //         title: 'Material',
            //         key: 'Material',
                    
            //     },
            //     {
            //         title: 'Description',
            //         key: 'Description',
                    
            //     },
            //     {
            //         title: 'Unit Price',
            //         key: 'UnitPrice',
                    
                 
            //     },
            //     {
            //         title: 'Quantity',
            //         key: 'Quantity',
                    
                   
            //     },
            //     {
            //         title: 'Sales Unit',
            //         key: 'SalesUnit',
                    
               
            //     },
            //     {
            //         title: 'Amount',
            //         key: 'Amount',
                    
            //     },
            // ],
            // data4:[
            //     {
            //         ItemNumber:'10',
            //         Material:'9174A74',
            //         Description:'TC M57 TOWER (9174A74)',
            //         UnitPrice:'98000',
            //         Quantity:'1',
            //         SalesUnit:'EA',
            //         Amount:'163,000'
            //     }
            // ],
            // 详情内表二
            columns3:[
                {
                    type: 'expand',
                    width: 10,
                    className:'demo-table-info-column',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    }
                },
                {
                    title: 'PO Type',
                    key: 'POType',
                    className:'demo-table-info-column'
                },
                {
                    title: 'PO Number',
                    key: 'PONumber',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Vendor',
                    key: 'Vendor',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Document Date',
                    key: 'DocumentDate',
                    className:'demo-table-info-column'
                }   
            ],
            data3:[
                {
                   POType:'S&D/SOH PO',
                   PONumber:'7500057888',
                   Vendor:'Lenovo Information Products(Shenzhen)',
                   DocumentDate:'2008/9/25',
                   ItemNumber:'9174A74',
                   Material:'TC M57 TOWER (9174A74)',
                   Description:'',
                   POQuantity:'1',
                   OrderUnit:'EA',
                   Status:'Fully Delivered'
                //    DocumentDate:'DocumentDate'
                }
            ],
            // columns6:[
            //     {
            //         title: 'Item Number',
            //         key: 'ItemNumber',
                    
                   
            //     },
            //     {
            //         title: 'Material',
            //         key: 'Material',
                    
            //     },
            //     {
            //         title: 'Description',
            //         key: 'Description',
                    
                   
            //     },
            //     {
            //         title: 'PO Quantity',
            //         key: 'POQuantity',
                    
            //     },
            //     {
            //         title: 'Order Unit',
            //         key: 'OrderUnit',
                    
                 
            //     },
            //     {
            //         title: 'Status',
            //         key: 'Status',
                    
            //     }
            // ],
            // data6:[
            //     {
                    // ItemNumber:'9174A74',
                    // Material:'TC M57 TOWER (9174A74)',
                    // Description:'',
                    // POQuantity:'1',
                    // OrderUnit:'EA',
                    // Status:'Fully Delivered'
            //     }
            // ],
            //详情内表三
            columns7:[
                {
                    type: 'expand',
                    width: 10,
                    className:'demo-table-info-column',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    }
                },
                {
                    title: 'Delivery Number',
                    key: 'DeliveryNumber',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Ship-to Part',
                    key: 'ShiptoPart',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Document Date',
                    key: 'DocumentDate',
                    className:'demo-table-info-column'
                },
                {
                    title: 'Actual GI date',
                    key: 'ActualGIdate',
                    className:'demo-table-info-column'
                }   
            ],
            data7:[
                {
                   DeliveryNumber:'5200089386',
                   ShiptoPart:'日本電計　株式会社',
                   DocumentDate:'2008/9/27',
                   ActualGIdate:'2008/9/27'
                }
            ],
            // columns8:[
            //     {
            //         title: 'Item Number',
            //         key: 'ItemNumber',
                    
                   
            //     },
            //     {
            //         title: 'Material',
            //         key: 'Material',
                    
            //     },
            //     {
            //         title:'Description',
            //         key:'Description',
            //         align:'center'
            //     },
            //     {
            //         title: 'Delivery Quantity',
            //         key: 'DeliveryQuantity',
                    
            //     },
            //     {
            //         title: 'Sales Unit',
            //         key: 'SalesUnit',
                    
                 
            //     }
            // ],
            // data8:[
            //     {
            //         ItemNumber:'10',
            //         Material:'9174A74',
            //         Description:'TC M57 TOWER (9174A74)',
            //         DeliveryQuantity:'',
            //         SalesUnit:'EA'  
            //     }
            // ],
        }
    },
    methods: {
        query() {
            alert('search')
        },
        // 分页
        changePage() {
            this.page = page;
        },
        //详情
        SeeModal() {
            // alert('details');
            this.modalSee = true;
            // this.$router.push('../upload')
        },
         //折叠效果
        // fold1() {
        //   if (this.showPrise1 == false) {
        //        this.$refs.from1.style = 'opacity:1; -webkit-transition:1s;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);';
        //        this.showPrise1 = true
        //   }else {
        //        this.$refs.from1.style = 'opacity:0; -webkit-transition:1s;';
        //        this.showPrise1 = false
        //   }
        // }
    }
}
</script>