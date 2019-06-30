const routers = [
    {
      path: 'Layout',
      name: 'Layout',
      component: () => import(/* webpackChunkName: "basicService" */ '@/views/basicService/Layout.vue'),
    },
    {
      path: 'Login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "basicService" */ '@/views/basicService/Login.vue'),
    },
    {
      path: 'AfterSaleCangchuDetail',
      name: 'AfterSaleCangchuDetail',
      component: () => import(/* webpackChunkName: "afterSaleManage" */ '@/views/basicService/afterSaleManage/AfterSaleCangchuDetail.vue'),
    },
    {
      path: 'afterSaleManage',
      name: 'afterSaleManage',
      component: () => import(/* webpackChunkName: "afterSaleManage" */ '@/views/basicService/afterSaleManage/afterSaleManage.vue'),
    },
    {
      path: 'afterSaleManageDetail',
      name: 'afterSaleManageDetail',
      component: () => import(/* webpackChunkName: "afterSaleManage" */ '@/views/basicService/afterSaleManage/afterSaleManageDetail.vue'),
    },
    {
      path: '>>>>>>>>>>>>>>>>>>>>>',
      name: '>>>>>>>>>>>>>>>>>>>>>',
      component: '>>>>>>>>>>>>>>>>>>>>>',
    },
    {
      path: 'BillManager',
      name: 'BillManager',
      component: () => import(/* webpackChunkName: "bill" */ '@/views/basicService/bill/BillManager.vue'),
    },
    {
      path: 'AccountManagerSupplier',
      name: 'AccountManagerSupplier',
      component: () => import(/* webpackChunkName: "customerService" */ '@/views/basicService/customerService/AccountManagerSupplier.vue'),
    },
    {
      path: 'NewAccountManagerSupplier',
      name: 'NewAccountManagerSupplier',
      component: () => import(/* webpackChunkName: "customerService" */ '@/views/basicService/customerService/NewAccountManagerSupplier.vue'),
    },
    {
      path: 'ComplateDeliveryInfo',
      name: 'ComplateDeliveryInfo',
      component: () => import(/* webpackChunkName: "enterApply" */ '@/views/basicService/enterApply/ComplateDeliveryInfo.vue'),
    },
    {
      path: 'ComplateSupplierInfo',
      name: 'ComplateSupplierInfo',
      component: () => import(/* webpackChunkName: "enterApply" */ '@/views/basicService/enterApply/ComplateSupplierInfo.vue'),
    },
    {
      path: 'CreateContract',
      name: 'CreateContract',
      component: () => import(/* webpackChunkName: "enterApply" */ '@/views/basicService/enterApply/CreateContract.vue'),
    },
    {
      path: 'Index',
      name: 'Index',
      component: () => import(/* webpackChunkName: "index" */ '@/views/basicService/index/Index.vue'),
    },
    {
      path: 'AbnormalOrderAdmin',
      name: 'AbnormalOrderAdmin',
      component: () => import(/* webpackChunkName: "order" */ '@/views/basicService/order/AbnormalOrderAdmin.vue'),
    },
    {
      path: 'AbnormalOrderDetail',
      name: 'AbnormalOrderDetail',
      component: () => import(/* webpackChunkName: "order" */ '@/views/basicService/order/AbnormalOrderDetail.vue'),
    },
    {
      path: 'SupplierOrder',
      name: 'SupplierOrder',
      component: () => import(/* webpackChunkName: "order" */ '@/views/basicService/order/SupplierOrder.vue'),
    },
    {
      path: 'LogisticsCenter',
      name: 'LogisticsCenter',
      component: () => import(/* webpackChunkName: "logisticsCenter" */ '@/views/basicService/order/logisticsCenter/LogisticsCenter.vue'),
    },
    {
      path: 'DeliveryInfo',
      name: 'DeliveryInfo',
      component: () => import(/* webpackChunkName: "supplier" */ '@/views/basicService/supplier/DeliveryInfo.vue'),
    },
    {
      path: 'ErpSystemDocking',
      name: 'ErpSystemDocking',
      component: () => import(/* webpackChunkName: "supplier" */ '@/views/basicService/supplier/ErpSystemDocking.vue'),
    },
    {
      path: 'ErpSystemInfo',
      name: 'ErpSystemInfo',
      component: () => import(/* webpackChunkName: "supplier" */ '@/views/basicService/supplier/ErpSystemInfo.vue'),
    },
    {
      path: 'SupplierInfo',
      name: 'SupplierInfo',
      component: () => import(/* webpackChunkName: "supplier" */ '@/views/basicService/supplier/SupplierInfo.vue'),
    },
    {
      path: 'VideoList',
      name: 'VideoList',
      component: () => import(/* webpackChunkName: "supplier" */ '@/views/basicService/supplier/VideoList.vue'),
    },
    {
      path: 'SupplierGrade',
      name: 'SupplierGrade',
      component: () => import(/* webpackChunkName: "supplierGrade" */ '@/views/basicService/supplierGrade/SupplierGrade.vue'),
    },
    {
      path: 'MessageNotification',
      name: 'MessageNotification',
      component: () => import(/* webpackChunkName: "wxMessage" */ '@/views/basicService/wxMessage/MessageNotification.vue'),
    },
    {
      path: 'AuditExhibitionParkList',
      name: 'AuditExhibitionParkList',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/AuditExhibitionParkList.vue'),
    },
    {
      path: 'BatchUpload',
      name: 'BatchUpload',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/BatchUpload.vue'),
    },
    {
      path: 'ExhibitionParkDetail',
      name: 'ExhibitionParkDetail',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/ExhibitionParkDetail.vue'),
    },
    {
      path: 'ExhibitionParkSignUp',
      name: 'ExhibitionParkSignUp',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/ExhibitionParkSignUp.vue'),
    },
    {
      path: 'ExhibitionParkSignUpRules',
      name: 'ExhibitionParkSignUpRules',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/ExhibitionParkSignUpRules.vue'),
    },
    {
      path: 'GoodsDetails',
      name: 'GoodsDetails',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/GoodsDetails.vue'),
    },
    {
      path: 'GoodsList',
      name: 'GoodsList',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/GoodsList.vue'),
    },
    {
      path: 'GoodsUpload',
      name: 'GoodsUpload',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/GoodsUpload.vue'),
    },
    {
      path: 'GoodsUploadRules',
      name: 'GoodsUploadRules',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/GoodsUploadRules.vue'),
    },
    {
      path: 'MerchantFlow',
      name: 'MerchantFlow',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/MerchantFlow.vue'),
    },
    {
      path: 'PublishGoods',
      name: 'PublishGoods',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/PublishGoods.vue'),
    },
    {
      path: 'Question',
      name: 'Question',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/Question.vue'),
    },
    {
      path: 'SingleGoodsUpload',
      name: 'SingleGoodsUpload',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/SingleGoodsUpload.vue'),
    },
    {
      path: 'StoreListHaoYiKu',
      name: 'StoreListHaoYiKu',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/StoreListHaoYiKu.vue'),
    },
    {
      path: 'UploadExhibitionGoods',
      name: 'UploadExhibitionGoods',
      component: () => import(/* webpackChunkName: "haoYiKu" */ '@/views/haoYiKu/UploadExhibitionGoods.vue'),
    },
    {
      path: 'AuditExhibitionParkList',
      name: 'AuditExhibitionParkList',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/AuditExhibitionParkList.vue'),
    },
    {
      path: 'BatchUpload',
      name: 'BatchUpload',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/BatchUpload.vue'),
    },
    {
      path: 'ExhibitionParkDetail',
      name: 'ExhibitionParkDetail',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/ExhibitionParkDetail.vue'),
    },
    {
      path: 'ExhibitionParkSignUp',
      name: 'ExhibitionParkSignUp',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/ExhibitionParkSignUp.vue'),
    },
    {
      path: 'ExhibitionParkSignUpRules',
      name: 'ExhibitionParkSignUpRules',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/ExhibitionParkSignUpRules.vue'),
    },
    {
      path: 'GoodsDetails',
      name: 'GoodsDetails',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/GoodsDetails.vue'),
    },
    {
      path: 'GoodsList',
      name: 'GoodsList',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/GoodsList.vue'),
    },
    {
      path: 'GoodsUpload',
      name: 'GoodsUpload',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/GoodsUpload.vue'),
    },
    {
      path: 'GoodsUploadRules',
      name: 'GoodsUploadRules',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/GoodsUploadRules.vue'),
    },
    {
      path: 'MerchantFlow',
      name: 'MerchantFlow',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/MerchantFlow.vue'),
    },
    {
      path: 'PublishGoods',
      name: 'PublishGoods',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/PublishGoods.vue'),
    },
    {
      path: 'Question',
      name: 'Question',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/Question.vue'),
    },
    {
      path: 'SingleGoodsUpload',
      name: 'SingleGoodsUpload',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/SingleGoodsUpload.vue'),
    },
    {
      path: 'StoreListShuaiBao',
      name: 'StoreListShuaiBao',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/StoreListShuaiBao.vue'),
    },
    {
      path: 'UploadExhibitionGoods',
      name: 'UploadExhibitionGoods',
      component: () => import(/* webpackChunkName: "shuaiBao" */ '@/views/shuaiBao/UploadExhibitionGoods.vue'),
    },
    {
      path: 'BatchUpload',
      name: 'BatchUpload',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/BatchUpload.vue'),
    },
    {
      path: 'GoodsList',
      name: 'GoodsList',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/GoodsList.vue'),
    },
    {
      path: 'GoodsUpload',
      name: 'GoodsUpload',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/GoodsUpload.vue'),
    },
    {
      path: 'PublishGoods',
      name: 'PublishGoods',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/PublishGoods.vue'),
    },
    {
      path: 'ShopCategoryItemManage',
      name: 'ShopCategoryItemManage',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/ShopCategoryItemManage.vue'),
    },
    {
      path: 'ShopDecorate',
      name: 'ShopDecorate',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/ShopDecorate.vue'),
    },
    {
      path: 'ShopInfo',
      name: 'ShopInfo',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/ShopInfo.vue'),
    },
    {
      path: 'SingleGoodsUpload',
      name: 'SingleGoodsUpload',
      component: () => import(/* webpackChunkName: "shop" */ '@/views/shuaiBao/shop/SingleGoodsUpload.vue'),
    },]