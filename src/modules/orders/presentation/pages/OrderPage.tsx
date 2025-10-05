import { useMemo } from "react";
import { useGetAllOrdersQuery } from "../../infrastructure/orderApi";
import DataTable from "../../../shared/infrastructure/components/DataTable";
import CreateOrderForm from "../components/CreateOrderForm";

export default function OrderPage() {
    const { isLoading, data } = useGetAllOrdersQuery();

    const columns = useMemo(
        () => [
            {
                accessorKey: "order_code",
                header: "ORDER CODE",
            },
            {
                id: "issue",
                header: "ISSUE",
                cell: ({ row }: { row: any }) => {
                    const issueName = row.original.issue_info?.issue_name || "";
                    const issueDescription =
                        row.original.issue_info?.issue_description || "";
                    return `${issueName} - ${issueDescription}`;
                },
            },
            {
                accessorKey: "device_data.serial_number",
                header: "DEVICE INFO",
            },
            {
                accessorKey: "status_description",
                header: "STATUS",
                cell: ({ getValue }: { getValue: () => any }) => {
                    const status = getValue() as string;
                    const getStatusColor = (status: string) => {
                        switch (status?.toLowerCase()) {
                            case "pending":
                            case "pendiente":
                                return "#f59e0b";
                            case "completed":
                            case "completado":
                                return "#10b981";
                            case "cancelled":
                            case "cancelado":
                                return "#ef4444";
                            case "in progress":
                            case "en progreso":
                                return "#3b82f6";
                            default:
                                return "#6b7280";
                        }
                    };

                    return (
                        <span
                            style={{
                                backgroundColor: getStatusColor(status),
                                color: "white",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "500",
                            }}
                        >
                            {status}
                        </span>
                    );
                },
            },
            {
                id: "actions",
                header: "ACTIONS",
                cell: ({ row }: { row: any }) => {
                    const handleEdit = () => {
                        console.log("Edit:", row.original);
                    };

                    const handleDelete = () => {
                        console.log("Delete:", row.original);
                    };

                    return (
                        <div style={{ display: "flex", gap: "8px" }}>
                            <button
                                onClick={handleEdit}
                                style={{
                                    padding: "4px 8px",
                                    backgroundColor: "#3b82f6",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                style={{
                                    padding: "4px 8px",
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                },
            },
        ],
        []
    );

    return (
        <div>
            <DataTable
                data={data || []}
                columns={columns}
                isLoading={isLoading}
            />
        </div>
    );
}
