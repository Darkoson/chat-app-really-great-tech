import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "chats" })
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
  id: string;

  @Column("varchar", { name: "sender", nullable: false })
  senderId: string;

  @Column("varchar", { name: "receiver", nullable: false })
  receiverId: string;

  @Column("varchar", { name: "message", nullable: false })
  message: string;

  @CreateDateColumn()
  created_at: Date;
}
