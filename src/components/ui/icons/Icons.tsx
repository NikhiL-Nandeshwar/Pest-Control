// Prop Types
import { SVGProps } from "react"

/**
 * TriangleDown icon component.
 * Renders a downward-pointing triangle SVG, commonly used to indicate dropdowns or expandable sections.
 *
 * @returns {JSX.Element} SVG element representing a downward triangle.
 */
export const TriangleDown = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M6.66602 8L0.666016 0H12.666L6.66602 8Z" fill="#5BB3FF" />
        </svg>
    );
}