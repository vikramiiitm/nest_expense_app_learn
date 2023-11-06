import {IsNumber, IsPositive, isString, IsNotEmpty, IsString, IsOptional, isPositive} from "class-validator"
import {Exclude, Expose} from "class-transformer"
import { ReportType } from "src/data";
 
export class CreateReportDTO {

    @IsNumber()
    @IsPositive()
    amount: number;
    
    @IsNotEmpty()
    @IsString()
    source: string;
}

export class UpdateReportDTO {
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount: number
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    source: string
}

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    created_at: Date;

    @Exclude()
    updated_at: Date;

    type: ReportType;


    // this constructor is used to initialize object with partial properties mentioned above
    // Use ReportResponseDto to pass object for response
    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this, partial)
    }
}