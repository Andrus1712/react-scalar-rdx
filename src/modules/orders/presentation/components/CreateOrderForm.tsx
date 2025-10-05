import { useState } from "react";
import { useCreateOrderMutation } from "../../infrastructure/orderApi";

export default function CreateOrderForm() {
    const [createOrder, { isLoading }] = useCreateOrderMutation();
    const [formData, setFormData] = useState({
        order_code: "",
        issue_name: "",
        issue_description: "",
        device_name: "",
        serial_number: "",
        status_description: "pending",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createOrder({
                order_code: formData.order_code,
                issue_info: {
                    issue_id: Date.now(),
                    issue_name: formData.issue_name,
                    issue_description: formData.issue_description,
                    issue_type: 1,
                    issue_type_description: "General",
                    issue_severity: 1,
                    issue_severity_description: "Low",
                    issue_reproducibility: 1,
                    issue_reproducibility_description: "Always",
                    issue_frequency: 1,
                    issue_frequency_description: "Once",
                    issue_impact: 1,
                    issue_impact_description: "Low",
                    issue_difficulty: 1,
                    issue_difficulty_description: "Easy",
                    issue_priority: 1,
                    issue_priority_description: "Low",
                    issue_urgency: 1,
                    issue_urgency_description: "Low",
                    issue_detection: 1,
                    issue_detection_description: "Manual",
                    issue_reported_by: "User",
                    issue_reported_date: new Date().toISOString().split('T')[0],
                    issue_reported_time: new Date().toTimeString().split(' ')[0],
                    issue_additional_info: "",
                    issue_screenshots: [],
                    issue_videos: [],
                    issue_logs: [],
                    issue_attachments: [],
                    issue_steps_to_reproduce: [],
                    issue_environment: "Production",
                    issue_additional_notes: "",
                    issue_tags: [],
                    issue_custom_fields: {
                        warranty_status: "Unknown",
                        purchase_date: "",
                        damage_type: "Unknown",
                        liquid_damage: false
                    },
                    issue_related_orders: []
                },
                device_data: {
                    device_id: Date.now(),
                    device_name: formData.device_name,
                    device_type: 1,
                    device_type_description: "Unknown",
                    device_brand: 1,
                    device_brand_type: "Unknown",
                    serial_number: formData.serial_number,
                    model_year: "2024",
                    color: "Unknown",
                    storage_capacity: "Unknown"
                },
                status_description: formData.status_description,
            } as any).unwrap();

            setFormData({
                order_code: "",
                issue_name: "",
                issue_description: "",
                device_name: "",
                serial_number: "",
                status_description: "pending",
            });
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                marginBottom: "20px",
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                }}
            >
                <input
                    name="order_code"
                    placeholder="Order Code"
                    value={formData.order_code}
                    onChange={handleChange}
                    required
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                />
                <input
                    name="issue_name"
                    placeholder="Issue Name"
                    value={formData.issue_name}
                    onChange={handleChange}
                    required
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                />
                <input
                    name="issue_description"
                    placeholder="Issue Description"
                    value={formData.issue_description}
                    onChange={handleChange}
                    required
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                />
                <input
                    name="device_name"
                    placeholder="Device Name"
                    value={formData.device_name}
                    onChange={handleChange}
                    required
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                />
                <input
                    name="serial_number"
                    placeholder="Serial Number"
                    value={formData.serial_number}
                    onChange={handleChange}
                    required
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                />
                <select
                    name="status_description"
                    value={formData.status_description}
                    onChange={handleChange}
                    style={{
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                    }}
                >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>
            <button
                type="submit"
                disabled={isLoading}
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                {isLoading ? "Creating..." : "Create Order"}
            </button>
        </form>
    );
}
