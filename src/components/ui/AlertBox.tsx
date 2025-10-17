// Icons
import { AlertCircle, CheckCircle2 } from "lucide-react";

// UI Components
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Utils
import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * Props for the AlertBox component.
 */
interface AlertBoxProps {
    message: string;
    label: string;
    className?: string;
    variant?: "default" | "error" | "warning" | "success";
}

/**
 * AlertBox Component
 *
 * Renders a styled alert box with an icon, label, and message.
 * The appearance changes based on the `variant` prop.
 *
 * @param {AlertBoxProps} props - The props for the AlertBox.
 * @returns {JSX.Element} The rendered AlertBox component.
 */
const AlertBox = ({ message, label, variant = "default", className = "" }: AlertBoxProps): JSX.Element => {

    /**
     * Returns the class names for the alert box based on the variant.
     */
    const AlertBoxClassName = () => {
        switch (variant) {
            case "default":
                return "bg-primary/10 [&_*]:text-gray-800 border-gray-300";
            case "error":
                return "bg-destructive/10 [&_*]:text-destructive border-destructive";
            case "warning":
                return "bg-warning/10 [&_*]:text-warning-foreground border-warning-foreground";
            case "success":
                return "bg-emerald-500/10 [&_*]:text-emerald-500 border-emerald-500";
            default:
                return "bg-gray-100 [&_*]:text-gray-800 border-gray-300";
        }
    };

    return (
        // Main alert container with dynamic styling
        <Alert className={cn(AlertBoxClassName(), "border-dashed w-full", className)}>
            {/* Icon based on variant */}
            {variant === "success" ? (
                <CheckCircle2 className={`h-4 w-4`} />
            ) : (
                <AlertCircle className={`h-4 w-4`} />
            )}
            {/* Alert label */}
            <AlertTitle>{label}</AlertTitle>
            {/* Alert message */}
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    );
};

export default AlertBox;