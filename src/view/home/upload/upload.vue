
<template>
    <div class='layout-details'>
        <table>
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Product</th>
                    <th>PO Number</th>
                    <th>Delivery Number</th>
                    <th>Status</th>
                    <th>Created On</th>
                </tr>
            </thead>
            <Collapse v-model="data" style='width:100%;'>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2016-10-26</td>
                        <td>components</td>
                        <td>Delivery</td>
                        <td>Status</td>
                        <td></td>
                    </tr>
                </tbody>
            <Panel name="data" >
                <p slot="content" style='width:1100px;'><Table border :columns="columns2" :data="data2"></Table></p>
            </Panel>
            </Collapse>
        </table>
            
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            columns1:[
                 {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Order Type',
                    key: 'OrderType',
                   
                },
                {
                    title: 'Sales Area',
                    key: 'SalesArea',
                    
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
                    key: 'Customer'
                
                },
                {
                    title: 'Net Value',
                    key: 'NetValue'
                 
                },
                {
                    title: 'Status',
                    key: 'Status'
                    
                   
                },
                {
                    title: 'Created On',
                    key: 'CreatedOn'
                    
               
                },
                {
                    title: 'Created By',
                    key: 'CreatedBy'
                    
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
                   CreatedBy:'CNDL000011'
                },
                {
                   OrderType: 'LI-Std Sales Order',
                   SalesArea:'JP10/11/00',
                   OrderNumber:'4210045397',
                   Customer:'日本電計　株式会社',
                   NetValue:'163000',
                   Status:'Completed',
                   CreatedOn:'2008/9/26',
                   CreatedBy:'CNDL000012'
                }
            ],
            columns2:[
                 {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Order Type',
                    key: 'OrderType',
                   
                },
                {
                    title: 'Sales Area',
                    key: 'SalesArea',
                    
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
                    key: 'Customer'
                
                },
                {
                    title: 'Net Value',
                    key: 'NetValue'
                 
                },
                {
                    title: 'Status',
                    key: 'Status'
                    
                   
                },
                {
                    title: 'Created On',
                    key: 'CreatedOn'
                    
               
                },
                {
                    title: 'Created By',
                    key: 'CreatedBy'
                    
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
                   CreatedOn:'2008/9/25',
                   CreatedBy:'CNDL000011'
                }
            ],
        }
    }
}
</script>


