<?php
namespace ScandiPWA\WishlistGraphQl\Model\Resolver\WishlistResolver;

/**
 * Interceptor class for @see \ScandiPWA\WishlistGraphQl\Model\Resolver\WishlistResolver
 */
class Interceptor extends \ScandiPWA\WishlistGraphQl\Model\Resolver\WishlistResolver implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Wishlist\Model\ResourceModel\Wishlist $wishlistResource, \Magento\Wishlist\Model\WishlistFactory $wishlistFactory)
    {
        $this->___init();
        parent::__construct($wishlistResource, $wishlistFactory);
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(\Magento\Framework\GraphQl\Config\Element\Field $field, $context, \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info, ?array $value = null, ?array $args = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'resolve');
        return $pluginInfo ? $this->___callPlugins('resolve', func_get_args(), $pluginInfo) : parent::resolve($field, $context, $info, $value, $args);
    }

    /**
     * {@inheritdoc}
     */
    public function loadWishlist(\Magento\Wishlist\Model\Wishlist $wishlist, $sharingCode, $context) : void
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'loadWishlist');
        $pluginInfo ? $this->___callPlugins('loadWishlist', func_get_args(), $pluginInfo) : parent::loadWishlist($wishlist, $sharingCode, $context);
    }
}
