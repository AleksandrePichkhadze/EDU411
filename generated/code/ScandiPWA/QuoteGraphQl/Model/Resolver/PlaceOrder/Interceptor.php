<?php
namespace ScandiPWA\QuoteGraphQl\Model\Resolver\PlaceOrder;

/**
 * Interceptor class for @see \ScandiPWA\QuoteGraphQl\Model\Resolver\PlaceOrder
 */
class Interceptor extends \ScandiPWA\QuoteGraphQl\Model\Resolver\PlaceOrder implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\QuoteGraphQl\Model\Cart\GetCartForUser $getCartForUser, \Magento\Quote\Api\CartManagementInterface $cartManagement, \Magento\Sales\Api\OrderRepositoryInterface $orderRepository, \Magento\QuoteGraphQl\Model\Cart\CheckCartCheckoutAllowance $checkCartCheckoutAllowance)
    {
        $this->___init();
        parent::__construct($getCartForUser, $cartManagement, $orderRepository, $checkCartCheckoutAllowance);
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(\Magento\Framework\GraphQl\Config\Element\Field $field, $context, \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info, ?array $value = null, ?array $args = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'resolve');
        return $pluginInfo ? $this->___callPlugins('resolve', func_get_args(), $pluginInfo) : parent::resolve($field, $context, $info, $value, $args);
    }
}