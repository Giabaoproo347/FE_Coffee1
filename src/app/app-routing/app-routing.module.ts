import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../user/home/home.component';
import {RegisterComponent} from '../user/register/register.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {LoginComponent} from '../user/login/login.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {HomePageComponent} from '../component/public/home-page/home-page.component';
import {BookListComponent} from '../component/admin/book/book-list/book-list.component';
import {BookCreateComponent} from '../component/admin/book/book-create/book-create.component';
import {BookEditComponent} from '../component/admin/book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../component/admin/book/book-delete/book-delete.component';
import {BookDetailComponent} from '../component/admin/book/book-detail/book-detail.component';
import {AuthorListComponent} from '../component/admin/author/author-list/author-list.component';
import {AuthorCreateComponent} from '../component/admin/author/author-create/author-create.component';
import {AuthorEditComponent} from '../component/admin/author/author-edit/author-edit.component';
import {AuthorDeleteComponent} from '../component/admin/author/author-delete/author-delete.component';
import {AuthorDetailComponent} from '../component/admin/author/author-detail/author-detail.component';
import {CategoryListComponent} from '../component/admin/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../component/admin/category/category-create/category-create.component';
import {CategoryEditComponent} from '../component/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from '../component/admin/category/category-delete/category-delete.component';
import {CategoryDetailComponent} from '../component/admin/category/category-detail/category-detail.component';
import {CommentListComponent} from '../component/admin/comment/comment-list/comment-list.component';
import {CommentCreateComponent} from '../component/admin/comment/comment-create/comment-create.component';
import {CommentEditComponent} from '../component/admin/comment/comment-edit/comment-edit.component';
import {CommentDeleteComponent} from '../component/admin/comment/comment-delete/comment-delete.component';
import {CommentDetailComponent} from '../component/admin/comment/comment-detail/comment-detail.component';
import {LanguageListComponent} from '../component/admin/language/language-list/language-list.component';
import {LanguageCreateComponent} from '../component/admin/language/language-create/language-create.component';
import {LanguageEditComponent} from '../component/admin/language/language-edit/language-edit.component';
import {LanguageDeleteComponent} from '../component/admin/language/language-delete/language-delete.component';
import {LanguageDetailComponent} from '../component/admin/language/language-detail/language-detail.component';
import {PublishingListComponent} from '../component/admin/publishing/publishing-list/publishing-list.component';
import {PublishingCreateComponent} from '../component/admin/publishing/publishing-create/publishing-create.component';
import {PublishingEditComponent} from '../component/admin/publishing/publishing-edit/publishing-edit.component';
import {PublishingDeleteComponent} from '../component/admin/publishing/publishing-delete/publishing-delete.component';
import {PublishingDetailComponent} from '../component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookPublicComponent} from '../component/public/book-public/book-public.component';
import {BookNewComponent} from '../component/public/book-new/book-new.component';
import {ProductListComponent} from '../components/admin/product/product-list/product-list.component';
import {ProductCreateComponent} from '../components/admin/product/product-create/product-create.component';
import {ProductEditComponent} from '../components/admin/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../components/admin/product/product-delete/product-delete.component';
import {ProductDetailComponent} from '../components/admin/product/product-detail/product-detail.component';
import {CategoriesListComponent} from '../components/admin/categories/categories-list/categories-list.component';
import {CategoriesCreateComponent} from '../components/admin/categories/categories-create/categories-create.component';
import {CategoriesEditComponent} from '../components/admin/categories/categories-edit/categories-edit.component';
import {CategoriesDeleteComponent} from '../components/admin/categories/categories-delete/categories-delete.component';
import {OrderListComponent} from '../components/admin/order/order-list/order-list.component';
import {OrderCreateComponent} from '../components/admin/order/order-create/order-create.component';
import {OrderEditComponent} from '../components/admin/order/order-edit/order-edit.component';
import {OrderDeleteComponent} from '../components/admin/order/order-delete/order-delete.component';
import {CategoriesDetailComponent} from '../components/admin/categories/categories-detail/categories-detail.component';
import {OrderDetailComponent} from '../components/admin/order/order-detail/order-detail.component';
import {OrderDetailListComponent} from '../components/admin/orderDetail/order-detail-list/order-detail-list.component';
import {OrderDetailCreateComponent} from '../components/admin/orderDetail/order-detail-create/order-detail-create.component';
import {OrderDetailEditComponent} from '../components/admin/orderDetail/order-detail-edit/order-detail-edit.component';
import {OrderDetailDeleteComponent} from '../components/admin/orderDetail/order-detail-delete/order-detail-delete.component';
import {OrderDetailDetailComponent} from '../components/admin/orderDetail/order-detail-detail/order-detail-detail.component';
import {PaymentListComponent} from '../components/admin/payment/payment-list/payment-list.component';
import {PaymentCreateComponent} from '../components/admin/payment/payment-create/payment-create.component';
import {PaymentEditComponent} from '../components/admin/payment/payment-edit/payment-edit.component';
import {PaymentDetailComponent} from '../components/admin/payment/payment-detail/payment-detail.component';
import {PromotionListComponent} from '../components/admin/promotion/promotion-list/promotion-list.component';
import {PromotionCreateComponent} from '../components/admin/promotion/promotion-create/promotion-create.component';
import {PromotionEditComponent} from '../components/admin/promotion/promotion-edit/promotion-edit.component';
import {PromotionDeleteComponent} from '../components/admin/promotion/promotion-delete/promotion-delete.component';
import {PromotionDetailComponent} from '../components/admin/promotion/promotion-detail/promotion-detail.component';
import {AppHompageTrueComponent} from '../components/public/app-hompage-true/app-hompage-true.component';
import {CheckoutComponent} from '../components/public/checkout/checkout.component';
import {OrderConfirmationComponent} from '../components/public/order-comfirmation/order-comfirmation.component';
import {StoreFrontComponent} from '../components/public/store-front/store-front.component';
import {ProductDetail1Component} from '../components/public/product-detail/product-detail.component';
import {ShoppingCartComponent} from '../components/public/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: 'home', component: AppHompageTrueComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
  {path: 'product-detail/:id', component: ProductDetail1Component},
  {path: 'categories-list', component: CategoriesListComponent},
  {path: 'categories-create', component: CategoriesCreateComponent},
  {path: 'categories-edit/:id', component: CategoriesEditComponent},
  {path: 'categories-delete/:id', component: CategoriesDeleteComponent},
  {path: 'categories-detail/:id', component: CategoriesDetailComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-create', component: OrderCreateComponent},
  {path: 'order-edit/:id', component: OrderEditComponent},
  {path: 'order-delete/:id', component: OrderDeleteComponent},
  {path: 'order-detail/:id', component: OrderDetailComponent},
  {path: 'orderDetail-list', component: OrderDetailListComponent},
  {path: 'orderDetail-create', component: OrderDetailCreateComponent},
  {path: 'orderDetail-edit/:id', component: OrderDetailEditComponent},
  {path: 'orderDetail-delete/:id', component: OrderDetailDeleteComponent},
  {path: 'orderDetail-detail/:id', component: OrderDetailDetailComponent},
  {path: 'payment-list', component: PaymentListComponent},
  {path: 'payment-create', component: PaymentCreateComponent},
  {path: 'payment-edit/:id', component: PaymentEditComponent},
  {path: 'payment-delete/:id', component: PaymentDetailComponent},
  {path: 'payment-detail/:id', component: PaymentDetailComponent},
  {path: 'promotion-list', component: PromotionListComponent},
  {path: 'promotion-create', component: PromotionCreateComponent},
  {path: 'promotion-edit/:id', component: PromotionEditComponent},
  {path: 'promotion-delete/:id', component: PromotionDeleteComponent},
  {path: 'promotion-detail/:id', component: PromotionDetailComponent},

  {path: 'book-list', component: BookListComponent},
  {path: 'book-create', component: BookCreateComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: 'book-delete/:id', component: BookDeleteComponent},
  {path: 'book-detail/:id', component: BookDetailComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'author-create', component: AuthorCreateComponent},
  {path: 'author-edit/:id', component: AuthorEditComponent},
  {path: 'author-delete/:id', component: AuthorDeleteComponent},
  {path: 'author-detail/:id', component: AuthorDetailComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-create', component: CategoryCreateComponent},
  {path: 'category-edit/:id', component: CategoryEditComponent},
  {path: 'category-delete/:id', component: CategoryDeleteComponent},
  {path: 'category-detail/:id', component: CategoryDetailComponent},
  {path: 'comment-list', component: CommentListComponent},
  {path: 'comment-create', component: CommentCreateComponent},
  {path: 'comment-edit/:id', component: CommentEditComponent},
  {path: 'comment-delete/:id', component: CommentDeleteComponent},
  {path: 'comment-detail/:id', component: CommentDetailComponent},
  {path: 'language-list', component: LanguageListComponent},
  {path: 'language-create', component: LanguageCreateComponent},
  {path: 'language-edit/:id', component: LanguageEditComponent},
  {path: 'language-delete/:id', component: LanguageDeleteComponent},
  {path: 'language-detail/:id', component: LanguageDetailComponent},
  {path: 'publishing-list', component: PublishingListComponent},
  {path: 'publishing-create', component: PublishingCreateComponent},
  {path: 'publishing-edit/:id', component: PublishingEditComponent},
  {path: 'publishing-delete/:id', component: PublishingDeleteComponent},
  {path: 'publishing-detail/:id', component: PublishingDetailComponent},
  {path: 'book-public', component: BookPublicComponent},
  {path: 'book-new', component: BookNewComponent},
  // {path: '', redirectTo: '/book-public', pathMatch: 'full'},
  {
    path: 'checkout',
    component: CheckoutComponent
  }, {
    path: 'confirmed',
    component: OrderConfirmationComponent
  }, {
    path: '**',
    component: StoreFrontComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetail1Component
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
