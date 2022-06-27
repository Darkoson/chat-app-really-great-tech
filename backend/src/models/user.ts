import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Length } from "class-validator";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
  id: string;

  @Column("varchar", {
    name: "email",
    length: 120,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column("varchar", { name: "password", length: 100, nullable: false })
  @Length(8, 100)
  password: string;

  @Column("varchar", { name: "firstname", length: 100, nullable: false })
  @Length(3, 100)
  firstname: string;

  @Column("varchar", { name: "lastname", length: 100, nullable: false })
  @Length(3, 100)
  lastname: string;

  @Column("varchar", { name: "avatar", length: 255, nullable: true })
  avatar: string;

  @Column("boolean", { name: "confirmed", default: true, nullable: false })
  confirmed: boolean;

  @ManyToMany(() => User, (blocker: User) => blocker.victims)
  @JoinTable({
    name: "black_list",
    joinColumn: { 
      name: "victim_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "blocker_id",
      referencedColumnName: "id",
    },
  })
  blockers: User[];

  @ManyToMany(() => User, (victim: User) => victim.blockers)
  victims: User[];
}
