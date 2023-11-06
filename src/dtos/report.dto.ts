import {IsNumber, IsPositive, isString, IsEmpty, IsString} from "class-validator"

export class CreateReportDTO {

    @IsNumber()
    @IsPositive()
    amount: number;
    
    @IsEmpty()
    @IsString()
    source: string;
}