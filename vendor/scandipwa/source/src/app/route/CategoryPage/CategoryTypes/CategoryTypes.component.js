/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { PureComponent } from "react";
import { CategoryTreeType } from "Type/Category";
import "./CategoryTypes.style";
/**
 * Category types
 * @class CategoryTypes
 * @namespace Component/CategoryTypes/Component
 */
export class CategoryTypes extends PureComponent {
    static propTypes = {
        category: CategoryTreeType.isRequired,
    };
    renderCategoryType() {
        const {
            category: { category_type },
        } = this.props;
        return (
            <div mix={{block: "CategoryTypes"}}>
                <p mix={{block: "CategoryTypes", elem:"Text"}}>{category_type}</p>
            </div>
        );
    }

    render() {
        return <div>{this.renderCategoryType()}</div>;
    }
}

export default CategoryTypes;
