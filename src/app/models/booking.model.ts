// booking.model.ts
export interface Booking {
    id: number;
    userId: number;
    hotelId: number;
    checkInDate: string;
    checkOutDate: string;
    roomType: string;
    roomCount: number;
    totalPrice: number;
    // Add other properties as needed
  }
  